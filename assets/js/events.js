(function () {
  const relativeDate = (days, hour, minute = 0) => {
    const value = new Date();
    value.setDate(value.getDate() + days);
    value.setHours(hour, minute, 0, 0);
    return value.toISOString();
  };

  window.SIDEQUEST_EVENTS = [
    {
      id: "new-frequency", title: "New Frequency", subtitle: "A campus music night", category: "Music", audience: "Students", featured: true,
      start: relativeDate(2, 19, 30), end: relativeDate(2, 23, 0), venue: "The Foundry", location: "Northstar Campus · East Yard", price: "Free",
      image: "assets/images/campus-music.jpg", imageAlt: "A singer performs under vivid pink and blue lights at a student gig",
      excerpt: "Fresh bands. Big feelings. Zero reason to stay in.",
      description: "Your friends' new favorite band hasn't happened yet. New Frequency puts the next wave of campus artists on one loud, lovely stage. Expect fuzzy guitars, late-night feelings, cheap snacks, and a dance floor that gets braver as the night goes on. Bring the group chat or come solo — either way, you belong in the room.",
      schedule: [["7:00 PM", "Doors open + welcome set"], ["7:45 PM", "Three live student acts"], ["10:30 PM", "DJ set to close it out"]],
      host: "Northstar Student Radio", access: "All Northstar students welcome. Student ID at the door."
    },
    {
      id: "print-club", title: "Print Club: Make a Mark", subtitle: "A hands-on print workshop", category: "Arts & culture", audience: "Open to all", featured: true,
      start: relativeDate(3, 14, 0), end: relativeDate(3, 17, 0), venue: "Common Ground Studio", location: "Warehouse Arts District", price: "$8 materials fee",
      image: "assets/images/creative-workshop.jpg", imageAlt: "Friends make colorful prints together in a bright art studio",
      excerpt: "Get ink on your hands. Leave with something you made.",
      description: "A low-pressure afternoon of making, experimenting, and getting a little messy. Learn the basics of screen printing with the Print Club crew, make a small run of posters or patches, and leave with a piece that is fully yours. All materials and beginner-friendly guidance are included.",
      schedule: [["2:00 PM", "Meet the makers + pick a design"], ["2:30 PM", "Print together"], ["4:30 PM", "Show and tell + studio hang"]],
      host: "Print Club", access: "Open to all. Under-16s should attend with an adult."
    },
    {
      id: "night-market", title: "Night Market After Hours", subtitle: "Food, finds & new friends", category: "Food & drink", audience: "Open to all", featured: true,
      start: relativeDate(5, 17, 0), end: relativeDate(5, 22, 0), venue: "The Old Courtyard", location: "Riverside Quarter", price: "Free entry",
      image: "assets/images/night-market.jpg", imageAlt: "Friends explore a lively outdoor food market lit by lanterns",
      excerpt: "One courtyard. Too many good things to try.",
      description: "The courtyard comes alive after dark. Browse indie makers, find your new comfort-food stall, catch a tiny live set, and stay longer than you meant to. The Night Market is easy to drop into and even better with a friend — though you will probably make a few while you're here.",
      schedule: [["5:00 PM", "Market gates open"], ["6:30 PM", "Live acoustic corner"], ["8:00 PM", "Courtyard DJ set"]],
      host: "Riverside Neighbourhood Collective", access: "Open to everyone. Step-free entry available from the east gate."
    },
    {
      id: "moon-screen", title: "Moon Screen: The Grand Escape", subtitle: "An open-air movie night", category: "Film", audience: "Campus community", featured: false,
      start: relativeDate(7, 19, 0), end: relativeDate(7, 22, 0), venue: "The Lawn", location: "Northstar Campus · South Green", price: "Free",
      image: "assets/images/hero-festival.jpg", imageAlt: "Friends gather outside at dusk for an open-air campus event",
      excerpt: "Big screen, soft grass, snacks you definitely share.",
      description: "Bring a blanket, claim a bit of grass, and let the week go. Moon Screen turns the South Green into an open-air cinema for one night, with a short local film before our audience-picked feature. There will be popcorn, hot chocolate, and a few spare blankets if you forget yours.",
      schedule: [["7:00 PM", "Blanket spots + snacks"], ["7:45 PM", "Short film from local makers"], ["8:15 PM", "Audience feature begins"]],
      host: "Northstar Film Society", access: "Open to campus students, staff, and guests. Bring a campus ID or guest pass."
    },
    {
      id: "makers-market", title: "Made Here Makers Market", subtitle: "Small things made with big heart", category: "Community", audience: "Open to all", featured: false,
      start: relativeDate(9, 11, 0), end: relativeDate(9, 16, 0), venue: "Foundry Hall", location: "Warehouse Arts District", price: "Free entry",
      image: "assets/images/night-market.jpg", imageAlt: "A lively handmade market with warm lights and local makers",
      excerpt: "Meet the makers behind your new favorite thing.",
      description: "A Saturday market for the pieces made slowly and with feeling. Meet local illustrators, ceramicists, vintage curators, and student makers; pick up something one-of-a-kind; and take a break at the courtyard coffee cart. Your browsing is welcome, even if your tote bag stays empty.",
      schedule: [["11:00 AM", "Doors + first browse"], ["12:30 PM", "Meet the makers mini-talk"], ["2:00 PM", "Open workshop table"]],
      host: "Made Here Collective", access: "Open to all ages. Dogs welcome outdoors."
    },
    {
      id: "sunday-table", title: "The Sunday Table", subtitle: "A potluck for the curious", category: "Food & drink", audience: "Students", featured: false,
      start: relativeDate(11, 16, 0), end: relativeDate(11, 19, 0), venue: "The Greenhouse", location: "Northstar Campus · West Walk", price: "Bring a dish",
      image: "assets/images/creative-workshop.jpg", imageAlt: "A welcoming group shares conversation around a communal table",
      excerpt: "Bring a bite, pull up a chair, leave with a new friend.",
      description: "A no-fuss Sunday potluck hosted by people who believe food tastes better when it's shared. Bring a dish if you can, bring yourself if you can't, and find a seat at a long table full of new faces. We'll have a few big bowls ready for anyone who needs them.",
      schedule: [["4:00 PM", "Doors open + set the table"], ["4:45 PM", "Eat together"], ["6:00 PM", "Cards, conversation, no rush"]],
      host: "Northstar Community Kitchen", access: "For Northstar students. Please add allergen notes to your dish."
    },
    {
      id: "ideas-after-hours", title: "Ideas After Hours", subtitle: "A tiny creative conference", category: "Workshops", audience: "Open to all", featured: false,
      start: relativeDate(14, 18, 30), end: relativeDate(14, 21, 30), venue: "Studio 4B", location: "Common Ground Arts Building", price: "$5 suggested",
      image: "assets/images/creative-workshop.jpg", imageAlt: "Creative collaborators trade ideas in a bright shared studio",
      excerpt: "Short talks, strange ideas, surprisingly good questions.",
      description: "Forget the stage-sized keynote. Ideas After Hours is an evening of six-minute talks from people who are making interesting things: zines, small businesses, community projects, music, and more. Come to listen, stay to chat, and leave with a note full of things you want to try.",
      schedule: [["6:30 PM", "Doors + idea wall"], ["7:00 PM", "Five short talks"], ["8:00 PM", "Snacks + open conversation"]],
      host: "Sidequest Friends", access: "Open to all. Seating is first come, first served."
    },
    {
      id: "river-sessions", title: "River Sessions", subtitle: "A little music by the water", category: "Music", audience: "Open to all", featured: false,
      start: relativeDate(17, 16, 0), end: relativeDate(17, 20, 0), venue: "Riverside Steps", location: "Riverside Quarter", price: "Pay what you can",
      image: "assets/images/campus-music.jpg", imageAlt: "A live band plays to a crowd under colorful lights",
      excerpt: "Local voices, golden hour, nowhere else to be.",
      description: "An easy-going afternoon of live music on the river steps. Three local performers bring acoustic sets, warm harmonies, and songs to take home in your head. Come for one set or stay for all of them. Bring a layer for when the sun slips away.",
      schedule: [["4:00 PM", "Doors + first set"], ["5:15 PM", "Local songwriter set"], ["6:30 PM", "Full-band sunset session"]],
      host: "Riverside Sounds", access: "Open to all. Bring your own picnic blanket."
    },
    {
      id: "good-food-lab", title: "Good Food Lab", subtitle: "A playful kitchen workshop", category: "Workshops", audience: "Campus community", featured: false,
      start: relativeDate(20, 13, 0), end: relativeDate(20, 16, 0), venue: "Common Kitchen", location: "Northstar Campus · South Hall", price: "$10 ingredients",
      image: "assets/images/night-market.jpg", imageAlt: "A busy food stall serves colorful dishes to friends at a night market",
      excerpt: "Make a meal, learn a trick, eat the evidence.",
      description: "A hands-on kitchen session about making something delicious from what is already around. Learn a few flexible flavor tricks, work in small teams, and then sit down to share what you made. Beginner cooks, enthusiastic snackers, and people who just want to try something new are all welcome.",
      schedule: [["1:00 PM", "Welcome + kitchen tour"], ["1:30 PM", "Cook in small teams"], ["3:00 PM", "Share the table"]],
      host: "Common Kitchen Crew", access: "Open to Northstar students, staff, and guests. Please share allergy needs when registering."
    }
  ];
})();
