const API = '/api';

async function createBrand() {
    const data = {
        brand_name: document.getElementById('brand_name').value,
        founder_name: document.getElementById('founder_name').value,
        category: document.getElementById('category').value,
        monthly_revenue: Number(document.getElementById('monthly_revenue').value),
        website: document.getElementById('website').value
    };

    await fetch(`${API}/brands`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    loadBrands();
}

async function loadBrands() {
    const res = await fetch(`${API}/brands`);
    const brands = await res.json();

    const tbody = document.querySelector('#brandsTable tbody');
    tbody.innerHTML = '';

    brands.forEach(b => {
        const row = `<tr>
            <td>${b.brand_name}</td>
            <td>${b.founder_name}</td>
            <td>${b.category}</td>
            <td>${b.status}</td>
            <td>
                <button onclick="advanceStatus('${b._id}', '${b.status}')">Next Status</button>
            </td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

async function advanceStatus(id, current) {
    const flow = ['SUBMITTED','UNDER_REVIEW','SHORTLISTED','ACCEPTED','REJECTED'];
    const next = flow[flow.indexOf(current) + 1];
    if (!next) return alert('Final status reached');

    await fetch(`${API}/brands/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: next })
    });

    loadBrands();
}

loadBrands();
