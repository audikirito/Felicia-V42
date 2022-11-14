const roles = {
    /*
    'Role Name': <Minimal Level To Obtain this Role>
    */
    'Beginner': 0,
    'E': 76,
    'D': 152,
    'C': 228,
    'B': 304,
    'A': 380,
    'S': 456,
    'S+': 532,
    'SS': 608,
    'SS+': 684,
    'SSR': 760,
    'SSR+': 836,
    'SR': 912,   
    'SR+': 1000,
    'IMORTAL': 2000
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}
