const villageInfo = {
    name: "Rampur Village",
    district: "Kolhapur",
    population: {
        total: "2,854",
        men: "1,245",
        women: "1,109",
        boys: "256",
        girls: "244"
    },
    area: "12.5 sq km",
    established: "1842",
    boardMembers: [
        { name: "Rajesh Patil", designation: "Sarpanch", contact: "9876543210", department: "Administration", image: '/images/member-sarpanch.jpg' },
        { name: "Priya Sharma", designation: "Up-Sarpanch", contact: "9876543211", department: "Development", image: '/images/member-upsarpanch.png' },
        { name: "Suresh Kumar", designation: "Member", contact: "9876543212", department: "Water Resources", image: '/images/member-sarpanch.jpg' }
    ],
    hospital: {
        name: "Gram Swasthya Kendra",
        doctors: 2,
        beds: 10,
        services: ["Primary Care", "Maternal Care", "Vaccinations"],
        timing: "24/7 Emergency Services"
    },
    dairy: {
        collections: [
            { center: "Main Center", dailyCollection: "500L", members: "120" },
            { center: "Sub Center", dailyCollection: "300L", members: "80" }
        ]
    },
    schemes: [
        { name: "Gram Rozgar Yojana", details: "Employment scheme for village residents" },
        { name: "Swachh Gram", details: "Village cleanliness initiative" }
    ],
    announcements: [
        { date: "2025-02-19", title: "Shiv Jayanti Celebration", details: "Shiv Jaynti Celeration at head office , Grampanchayat Rampur. Celebration will start at 6 pm in the evening.Requesting all the villagers to join " },
        { date: "2025-02-4", title: "Gram Sabha Meeting", details: "Annual planning meeting at 10 AM" },
        { date: "2025-02-5", title: "Health Camp", details: "Free health checkup camp" }
    ],
    achievements: [
        "Construction of new water tank",
        "Solar street lights installation",
        "New primary school building"
    ]
};

export default villageInfo;
