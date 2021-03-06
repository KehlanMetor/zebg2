const config = {
  "ldevelopers": [],
  "developers": [],
  "managers": [],
  "hadmins": [],
  "admins": [],
  "hmods": [],
  "mods": [],
  "premiump": [],
  "premium": [],
  "trusted": [],

  "token": process.env.TOKEN,

  "crm" : {
    "users": [],
    "version": "",
    "edition": ""
  }, 

  "mailer" : {
    "address": "",
    "password": "",
    "host": "",
    "ssl": true
  }, 
  
  "dashboard" : {
    "oauthSecret": "8h5yJ6uCOEY7Xe2HY53n9xvOyDB79tq9",
    "callbackURL": "https://discord.gg/js7gmb8Gbw",
    "sessionSecret": "",
    "domain": "",
    "port": 80
  },

  "lava-link": {
    "nodes": [
      {
        "host": "localhost",
        "region": "us-east",
        "password": "",
        "port": 8080
      }
    ]
  },

  "defaultSettings" : {
    "prefix": "?",
  },

  permLevels: [
    { level: 0,
      name: "User", 
      check: () => true
    },
    { level: 1,
      name: "Trusted", 
      check: (message) => config.trusted.includes(message.author.id)
    },
    { level: 2,
      name: "Premium", 
      check: (message) => config.premium.includes(message.author.id)
    },
    { level: 3,
      name: "Premium+", 
      check: (message) => config.premiump.includes(message.author.id)
    },
    { level: 4,
      name: "Moderator", 
      check: (message) => config.mods.includes(message.author.id)
    },
    { level: 5,
      name: "Head Moderator", 
      check: (message) => config.hmods.includes(message.author.id)
    },
    { level: 5,
      name: "Head Moderator", 
      check: (message) => config.hmods.includes(message.author.id)
    },
    { level: 6,
      name: "Adminsitrator", 
      check: (message) => config.admins.includes(message.author.id)
    },
    { level: 7,
      name: "Head Administrator", 
      check: (message) => config.hadmins.includes(message.author.id)
    },

    { level: 8,
      name: "Manager",
      check: (message) => config.managers.includes(message.author.id)
    },

    { level: 9,
      name: "Developer",
      check: (message) => config.developers.includes(message.author.id)
    },

    { level: 10,
      name: "Lead Developer", 
      check: (message) => config.ldevelopers.includes(message.author.id)
    }
  ]
};

module.exports = config;
