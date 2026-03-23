// Core Database Utilities
function getDB(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
}

function setDB(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Authentication Utilities
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('skilltern_current_user'));
}

function setCurrentUser(user) {
    localStorage.setItem('skilltern_current_user', JSON.stringify(user));
}

function logout() {
    localStorage.removeItem('skilltern_current_user');
    const pathDepth = window.location.pathname.split('/').reverse();
    if(pathDepth[0] === 'dashboard.html' && pathDepth[1] === 'user') window.location.href = '../../index.html';
    else if(pathDepth[0] === 'dashboard.html' && pathDepth[1] === 'company') window.location.href = '../../index.html';
    else if(pathDepth[0] === 'dashboard.html' && pathDepth[1] === 'admin') window.location.href = '../../index.html';
    else window.location.href = '../../index.html'; // Fallback
}

function requireAuth(role) {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = '../../index.html';
        return null;
    }
    if (role && user.role !== role) {
        if(user.role === 'user') window.location.href = '../user/dashboard.html';
        else if(user.role === 'company') window.location.href = '../company/dashboard.html';
        else if(user.role === 'admin') window.location.href = '../admin/dashboard.html';
    }
    return user;
}

// Helper Utilities
function calculateMatch(userSkills, internshipSkills) {
    if (!userSkills || !internshipSkills || internshipSkills.length === 0) return 0;
    const matchCount = internshipSkills.filter(skill => 
        userSkills.some(uSkill => uSkill.toLowerCase() === skill.toLowerCase())
    ).length;
    return Math.round((matchCount / internshipSkills.length) * 100);
}

function getMatchCircleClass(matchPercentage) {
    if (matchPercentage === 100) return 'match-100';
    if (matchPercentage >= 75) return 'match-high';
    if (matchPercentage >= 50) return 'match-medium';
    if (matchPercentage > 0) return 'match-low';
    return 'match-0';
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

function formatDate(dateStr) {
    if(!dateStr) return '';
    const d = new Date(dateStr);
    return d.toISOString().split('T')[0];
}
