document.addEventListener('DOMContentLoaded', () => {
    // Optional initialization logic can go here
});

function switchTab(tabId, element) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all sidebar navigation items
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.remove('active');
    });

    // Activate the selected tab and highlight its corresponding navigation item
    document.getElementById(tabId).classList.add('active');
    element.classList.add('active');

    // Update the main header title dynamically based on the selected section
    const titles = {
        'students': 'Student Records',
        'faculty': 'Faculty Management',
        'courses': 'Course Scheduling'
    };
    
    document.getElementById('page-title').textContent = titles[tabId] || 'Dashboard';
}