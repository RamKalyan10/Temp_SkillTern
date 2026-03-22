const initialUsers = [
    {
        id: 'u1',
        name: 'Rahul Sharma',
        email: 'rahul@email.com',
        phone: '+91 9876543210',
        location: 'Mumbai, India',
        bio: 'Final year CS student passionate about web development.',
        careerObjective: 'Looking for frontend development internships to gain industry experience.',
        skills: ['React', 'JavaScript', 'TypeScript', 'CSS', 'HTML', 'Node.js'],
        completion: 85,
        password: 'password123',
        role: 'user'
    },
    { id: 'u2', name: 'Priya Patel', email: 'priya@email.com', location: 'Bangalore, India', completion: 70, password: 'password123', role: 'user', skills: ['Python', 'Machine Learning', 'SQL'] },
    { id: 'u3', name: 'Amit Kumar', email: 'amit@email.com', location: 'Delhi, India', completion: 55, password: 'password123', role: 'user', skills: ['C++', 'Java'] }
];

const initialCompanies = [
    {
        id: 'c1',
        name: 'TechNova Solutions',
        email: 'hr@technova.com',
        website: 'technova.com',
        industry: 'Technology',
        about: 'A fast-growing startup building AI-powered tools for businesses.',
        founded: '2019',
        size: '50-100',
        status: 'Verified',
        password: 'password123',
        role: 'company'
    },
    { id: 'c2', name: 'DataMinds Analytics', email: 'hr@dataminds.com', industry: 'Data Analytics', size: '100-500', status: 'Verified', password: 'password123', role: 'company' },
    { id: 'c3', name: 'CloudStack Inc.', email: 'hr@cloudstack.com', industry: 'Cloud Computing', size: '10-50', status: 'Pending', password: 'password123', role: 'company' }
];

const initialAdmins = [
    { id: 'a1', name: 'Admin', email: 'admin@email.com', password: 'password123', role: 'admin' }
];

const initialInternships = [
    {
        id: 'i1',
        title: 'Frontend Developer Intern',
        companyId: 'c1',
        companyName: 'TechNova Solutions',
        location: 'Remote',
        duration: '3 months',
        stipend: '₹15,000/mo',
        type: 'Internal', 
        workType: 'Remote', 
        skills: ['React', 'JavaScript', 'TypeScript', 'CSS'],
        createdAt: '2025-03-15'
    },
    { id: 'i2', title: 'Data Science Intern', companyId: 'c2', companyName: 'DataMinds Analytics', location: 'Bangalore', duration: '6 months', stipend: '₹20,000/mo', type: 'Internal', workType: 'Hybrid', skills: ['Python', 'Machine Learning', 'SQL', 'Pandas'], createdAt: '2025-03-14' },
    { id: 'i3', title: 'Backend Developer Intern', companyId: 'c1', companyName: 'TechNova Solutions', location: 'Mumbai', duration: '3 months', stipend: '₹12,000/mo', type: 'Internal', workType: 'Onsite', skills: ['Node.js', 'JavaScript', 'SQL', 'REST APIs'], createdAt: '2025-03-12' },
    { id: 'i4', title: 'DevOps Intern', companyId: 'c3', companyName: 'CloudStack Inc.', location: 'Remote', duration: '4 months', stipend: '₹18,000/mo', type: 'Internal', workType: 'Remote', skills: ['AWS', 'Docker', 'Linux', 'CI/CD'], createdAt: '2025-03-10' },
    { id: 'i5', title: 'Full Stack Intern', companyId: 'c1', companyName: 'TechNova Solutions', location: 'Mumbai', duration: '6 months', stipend: '₹20,000/mo', type: 'Internal', workType: 'Hybrid', skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'], createdAt: '2025-03-05' },
    { id: 'i6', title: 'ML Engineer Intern', companyId: 'c2', companyName: 'DataMinds Analytics', location: 'Bangalore', duration: '6 months', stipend: '₹25,000/mo', type: 'Internal', workType: 'Onsite', skills: ['Python', 'TensorFlow', 'Machine Learning', 'Docker'], createdAt: '2025-03-01' },
    { id: 'i7', title: 'UI/UX Design Intern', companyName: 'Google', stipend: '₹50,000/mo', type: 'External', link: 'https://careers.google.com' },
    { id: 'i8', title: 'Software Engineering Intern', companyName: 'Microsoft', stipend: '₹60,000/mo', type: 'External', link: 'https://careers.microsoft.com' }
];

const initialApplications = [
    { id: 'app1', userId: 'u1', userName: 'Rahul Sharma', internshipId: 'i1', internshipTitle: 'Frontend Developer Intern', companyId: 'c1', companyName: 'TechNova Solutions', date: '2025-03-16', status: 'Shortlisted' },
    { id: 'app2', userId: 'u1', userName: 'Rahul Sharma', internshipId: 'i3', internshipTitle: 'Backend Developer Intern', companyId: 'c1', companyName: 'TechNova Solutions', date: '2025-03-17', status: 'Applied' },
    { id: 'app3', userId: 'u3', userName: 'Amit Kumar', internshipId: 'i3', internshipTitle: 'Backend Developer Intern', companyId: 'c1', companyName: 'TechNova Solutions', date: '2025-03-18', status: 'Applied' }
];

// Initialize Local Storage if empty
if (!localStorage.getItem('internhub_users')) {
    localStorage.setItem('internhub_users', JSON.stringify(initialUsers));
    localStorage.setItem('internhub_companies', JSON.stringify(initialCompanies));
    localStorage.setItem('internhub_admins', JSON.stringify(initialAdmins));
    localStorage.setItem('internhub_internships', JSON.stringify(initialInternships));
    localStorage.setItem('internhub_applications', JSON.stringify(initialApplications));
}
