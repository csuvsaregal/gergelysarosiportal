document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("dynamic-list");
    const addItemButton = document.getElementById("add-item");
    const newItemInput = document.getElementById("new-item-input");

    // Load list from the server
    async function fetchList() {
        const response = await fetch("/api/list-items/");
        const items = await response.json();
        renderList(items);
    }

    // Render list items
    function renderList(items) {
        list.innerHTML = "";
        items.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${item.name}</span>
                <button onclick="removeItem(${item.id})">Check</button>
            `;
            list.appendChild(li);
        });
    }

    // Add new item
    addItemButton.addEventListener("click", async () => {
        const newItem = newItemInput.value.trim();
        if (newItem) {
            const response = await fetch("/api/list-items/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: newItem }),
            });
            const item = await response.json();
            fetchList();
            newItemInput.value = "";
        }
    });


    // Remove item
    window.removeItem = async (itemId) => {
        await fetch(`/api/delete-item/${itemId}/`, { method: "POST" });
        fetchList(); // Frissítjük a listát
    };


    // Restore items (called once a day at 5:00)
    async function restoreItems() {
        await fetch("/api/restore-items/", { method: "POST" });
        fetchList();
    }

    // Polling time to restore items
    setInterval(() => {
        const now = new Date();
        if (now.getHours() === 5 && now.getMinutes() === 0) {
            restoreItems();
        }
    }, 60000);


    fetchList();
});
