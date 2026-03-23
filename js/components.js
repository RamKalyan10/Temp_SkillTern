// Component rendering logic for Vanilla JS architecture

function renderNavbar(titleClass, titleText) {
    const user = getCurrentUser();
    const navbarHtml = `
        <div class="flex justify-between items-center bg-[#f4f7f9] border-b border-gray-200 px-6 py-3 z-10 relative">
            <div class="flex items-center gap-4 w-full max-w-2xl">
                <span class="text-[#2563eb] font-bold text-lg mr-2">SkillTern</span>
                <span class="text-gray-500 text-xs mt-1 mr-4">${titleText}</span>
                <div class="relative flex-1">
                    <i class="fas fa-search absolute left-3 top-2.5 text-gray-400 text-sm"></i>
                    <input type="text" placeholder="Search here..." class="pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-full bg-white text-gray-700 transition-all shadow-sm">
                </div>
            </div>
            <div class="flex items-center gap-6">
                <div class="relative cursor-pointer hover:text-blue-600 transition text-gray-600">
                    <i class="far fa-bell text-lg"></i>
                    <span class="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold rounded-full h-3.5 w-3.5 flex items-center justify-center border border-white">3</span>
                </div>
                <div class="flex items-center gap-2 cursor-pointer p-1 pr-3 rounded bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition">
                    <div class="w-6 h-6 rounded bg-orange-400 text-white flex items-center justify-center font-bold text-xs">
                        <i class="fas fa-smile"></i>
                    </div>
                    <span class="font-medium text-sm">${user ? user.name : 'User'}</span>
                </div>
            </div>
        </div>
    `;
    document.getElementById('navbar-container').innerHTML = navbarHtml;
}

function renderSidebar(role, activePage) {
    let menuItems = [];
    let title = '';
    let topIcon = '';
    
    if (role === 'user') {
        title = 'Student Panel';
        topIcon = 'fas fa-graduation-cap text-[#2563eb]';
        menuItems = [
            { id: 'dashboard', icon: 'fas fa-home', text: 'Dashboard', link: 'dashboard.html' },
            { id: 'profile', icon: 'fas fa-user', text: 'Profile', link: 'profile.html' },
            { id: 'internships', icon: 'fas fa-briefcase', text: 'Internships', link: 'internships.html' },
            { id: 'quick', icon: 'fas fa-bolt text-orange-400', text: 'Quick Match', link: 'quick.html' },
            { id: 'applications', icon: 'fas fa-file-alt', text: 'Applications', link: 'applications.html' }
        ];
    } else if (role === 'company') {
        title = 'Company Panel';
        topIcon = 'fas fa-graduation-cap text-[#2563eb]';
        menuItems = [
            { id: 'dashboard', icon: 'fas fa-home text-orange-400', text: 'Dashboard', link: 'dashboard.html' },
            { id: 'profile', icon: 'fas fa-building', text: 'Profile', link: 'profile.html' },
            { id: 'post', icon: 'fas fa-plus', text: 'Post Internship', link: 'post.html' },
            { id: 'manage', icon: 'fas fa-cog', text: 'Manage Listings', link: 'manage.html' },
            { id: 'applicants', icon: 'fas fa-users text-blue-800', text: 'Applicants', link: 'applicants.html' }
        ];
    } else if (role === 'admin') {
        title = 'Admin Panel';
        topIcon = 'fas fa-graduation-cap text-[#2563eb]';
        menuItems = [
            { id: 'dashboard', icon: 'fas fa-home text-orange-400', text: 'Dashboard', link: 'dashboard.html' },
            { id: 'users', icon: 'fas fa-users', text: 'Users', link: 'users.html' },
            { id: 'companies', icon: 'fas fa-building', text: 'Companies', link: 'companies.html' },
            { id: 'internships', icon: 'fas fa-briefcase', text: 'Internships', link: 'internships.html' },
            { id: 'external', icon: 'fas fa-globe text-blue-400', text: 'External Posts', link: 'external.html' }
        ];
    }

    const navLinksHtml = menuItems.map(item => `
        <a href="${item.link}" class="flex items-center gap-3 px-4 py-3 border-b border-gray-100 transition-all ${activePage === item.id ? 'bg-[#2563eb] text-white shadow-sm' : 'text-gray-700 hover:bg-gray-50'}">
            <div class="w-6 text-center ${activePage === item.id ? 'text-white' : 'text-gray-500'}">
                <i class="${item.icon.includes('text-') && activePage === item.id ? item.icon.split(' ')[0] + ' ' + item.icon.split(' ')[1] : item.icon} text-sm"></i>
            </div>
            <span class="font-medium text-[13px]">${item.text}</span>
        </a>
    `).join('');

    const sidebarHtml = `
        <div class="w-56 bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0 shadow-sm z-20">
            <div class="h-[60px] border-b border-gray-200 flex items-center px-5 gap-3 bg-white">
                <i class="${topIcon} text-xl"></i>
                <div class="flex flex-col justify-center">
                    <h1 class="font-bold text-gray-900 leading-none text-[15px]">SkillTern</h1>
                    <p class="text-[10px] text-gray-500 mt-1">${title}</p>
                </div>
            </div>
            <div class="flex-1 overflow-y-auto">
                ${navLinksHtml}
            </div>
            <div class="p-4 border-t border-gray-200 bg-white">
                <button onclick="logout()" class="flex items-center gap-2 text-red-600 font-medium px-4 py-2 hover:bg-red-50 w-full transition-colors text-xs">
                    <i class="fas fa-sign-out-alt"></i>
                    Logout
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('sidebar-container').innerHTML = sidebarHtml;
}

function initLayout(role, activePage, titleText = '') {
    renderSidebar(role, activePage);
    renderNavbar('', titleText);
}
