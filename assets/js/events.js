(function () {
  const relativeDate = (days, hour, minute = 0) => {
    const value = new Date();
    value.setDate(value.getDate() + days);
    value.setHours(hour, minute, 0, 0);
    return value.toISOString();
  };
  const campus = "KIIT Campus · Patia, Bhubaneswar";

  // Demo listings are illustrative. Confirm all event details with organizers before publishing them as real events.
  window.SIDEQUEST_EVENTS = [
    {
      id: "campus-beats", title: "Campus Beats: After Class", subtitle: "Student bands, big campus energy", category: "Music", audience: "Students", featured: true,
      start: relativeDate(2, 19, 30), end: relativeDate(2, 23, 0), venue: "KSAC Auditorium", location: campus, price: "Free",
      image: "assets/images/music-placeholder.svg", imageAlt: "Temporary artwork placeholder for a campus music event",
      excerpt: "Student bands, big energy, and a reason to stay out late.",
      description: "A campus music night for the acts you have been hearing about in the corridor. Expect student bands, a few surprise collaborations, chai between sets, and a dance floor that gets braver as the evening goes on. Bring your friends or show up solo — either way, you belong in the room.",
      schedule: [["7:00 PM", "Doors open + welcome set"], ["7:45 PM", "Three live student acts"], ["10:30 PM", "DJ set to close it out"]],
      host: "Student Music Collective", access: "For KIIT students. Keep your campus ID handy."
    },
    {
      id: "pattachitra-lab", title: "Pattachitra: Paint & Pattern", subtitle: "An Odisha-inspired art afternoon", category: "Arts & culture", audience: "Open to all", featured: true,
      start: relativeDate(3, 14, 0), end: relativeDate(3, 17, 0), venue: "KIIT Student Activity Centre", location: campus, price: "₹150 materials",
      image: "assets/images/art-placeholder.svg", imageAlt: "Temporary artwork placeholder for an Indian art workshop",
      excerpt: "Slow down, pick up a brush, make something by hand.",
      description: "A beginner-friendly afternoon exploring Pattachitra-inspired line, pattern, and storytelling with a local art facilitator. Learn about the craft, try a few techniques, and make a small piece to take home. Materials and gentle guidance are included; no drawing experience needed.",
      schedule: [["2:00 PM", "Meet the artist + see the materials"], ["2:30 PM", "Try line and pattern techniques"], ["4:30 PM", "Share your work + studio hang"]],
      host: "Bhubaneswar Art Circle", access: "Open to all. Under-16s should attend with an adult."
    },
    {
      id: "patia-night-bazaar", title: "Patia Night Bazaar", subtitle: "Street food, student stalls & good company", category: "Food & drink", audience: "Open to all", featured: true,
      start: relativeDate(5, 17, 0), end: relativeDate(5, 22, 0), venue: "Campus Open-Air Theatre", location: campus, price: "Free entry",
      image: "assets/images/food-placeholder.svg", imageAlt: "Temporary artwork placeholder for an Indian campus food bazaar",
      excerpt: "Dahi bara, ghuguni, sweet treats. Come hungry, leave happy.",
      description: "A lively evening bazaar bringing student-run stalls and Bhubaneswar favourites together in one place. Browse handmade finds, share a plate of dahi bara aloo dum or ghuguni, and stay for a little live music. The best plan is to bring a friend and order one more thing for the table.",
      schedule: [["5:00 PM", "Market gates open"], ["6:30 PM", "Acoustic set from student artists"], ["8:00 PM", "Courtyard DJ set"]],
      host: "Sidequest Campus Crew", access: "Open to KIIT students and invited guests. Step-free entry route to be confirmed by organizers."
    },
    {
      id: "moonlight-movie-adda", title: "Moonlight Movie Adda", subtitle: "A film night under the open sky", category: "Film", audience: "Campus community", featured: false,
      start: relativeDate(7, 19, 0), end: relativeDate(7, 22, 0), venue: "KIIT Open-Air Theatre", location: campus, price: "Free",
      image: "assets/images/community-placeholder.svg", imageAlt: "Temporary artwork placeholder for an open-air campus film night",
      excerpt: "A big screen, a soft lawn, and snacks worth sharing.",
      description: "Bring a blanket, claim a little patch of lawn, and let the week go. The film society is putting on an open-air screening with a short student-made film before the main feature. Popcorn and chai will be close by, and a few spare blankets will be available if you forget yours.",
      schedule: [["7:00 PM", "Blanket spots + chai"], ["7:45 PM", "Student short-film showcase"], ["8:15 PM", "Audience-picked feature begins"]],
      host: "Campus Film Circle", access: "For KIIT students, staff, and invited guests."
    },
    {
      id: "made-in-bhubaneswar", title: "Made in Bhubaneswar", subtitle: "Student makers & local finds", category: "Community", audience: "Open to all", featured: false,
      start: relativeDate(9, 11, 0), end: relativeDate(9, 16, 0), venue: "KIIT Student Activity Centre", location: campus, price: "Free entry",
      image: "assets/images/art-placeholder.svg", imageAlt: "Temporary artwork placeholder for a student makers market",
      excerpt: "Meet the makers behind your new favourite thing.",
      description: "A relaxed market for things made with care. Meet student illustrators, ceramicists, upcyclers, and local makers; pick up something one of a kind; and take a break at the chai counter. Browsing is welcome, even if your tote bag stays empty.",
      schedule: [["11:00 AM", "Doors + first browse"], ["12:30 PM", "Meet the makers mini-talk"], ["2:00 PM", "Open craft table"]],
      host: "Made Here Student Collective", access: "Open to all ages. Visitors should follow campus entry guidance."
    },
    {
      id: "chai-chapters", title: "Chai & Chapters", subtitle: "A reading circle for the curious", category: "Community", audience: "Students", featured: false,
      start: relativeDate(11, 16, 0), end: relativeDate(11, 19, 0), venue: "Student Activity Centre", location: campus, price: "Free",
      image: "assets/images/community-placeholder.svg", imageAlt: "Temporary artwork placeholder for a student reading circle",
      excerpt: "Bring a book, pull up a chair, leave with a new friend.",
      description: "A low-key Sunday reading circle hosted by people who believe good stories are better shared. Bring a book in any language, bring yourself if you are between reads, and find a seat at a table full of new faces. Chai and a few snacks are on us.",
      schedule: [["4:00 PM", "Arrive + pick your chai"], ["4:30 PM", "Quiet reading time"], ["5:30 PM", "Stories, recommendations + chat"]],
      host: "Campus Reading Circle", access: "For KIIT students. All reading levels and languages welcome."
    },
    {
      id: "build-for-bhubaneswar", title: "Build for Bhubaneswar", subtitle: "A student problem-solving sprint", category: "Tech", audience: "Open to all", featured: false,
      start: relativeDate(14, 9, 0), end: relativeDate(14, 18, 0), venue: "KIIT Campus · Innovation Lab", location: campus, price: "Free",
      image: "assets/images/community-placeholder.svg", imageAlt: "Temporary artwork placeholder for a student technology event",
      excerpt: "One day, fresh teams, useful ideas for the city.",
      description: "A one-day, beginner-friendly sprint for people who want to make something useful together. Form a small team, choose a local challenge, and sketch or prototype a first idea with help from mentors. You do not need a finished product or a perfect pitch — just curiosity and a willingness to build.",
      schedule: [["9:00 AM", "Check-in + team matching"], ["10:30 AM", "Problem pitches + mentor circles"], ["4:00 PM", "Show what you made"]],
      host: "Student Makers Network", access: "Open to KIIT students and invited student teams. Bring a laptop if you have one."
    },
    {
      id: "local-lines-open-mic", title: "Open Mic: Local Lines", subtitle: "Poetry, music & stories in any language", category: "Music", audience: "Open to all", featured: false,
      start: relativeDate(17, 18, 0), end: relativeDate(17, 21, 0), venue: "KSAC Auditorium", location: campus, price: "Free",
      image: "assets/images/music-placeholder.svg", imageAlt: "Temporary artwork placeholder for a student open-mic night",
      excerpt: "Odia, Hindi, English — bring the words you have.",
      description: "An easy-going open mic for songs, poems, comedy, and stories in any language. Take the mic for five minutes or settle into the audience with a cup of chai. First timers are especially welcome; the room is here to listen, not judge.",
      schedule: [["6:00 PM", "Sign up + sound check"], ["6:30 PM", "Open-mic sets begin"], ["8:30 PM", "Last call + group jam"]],
      host: "Student Stage Collective", access: "Open to the KIIT community. Performer sign-up is first come, first served."
    },
    {
      id: "odia-shared-table", title: "Odia Flavours, Shared Table", subtitle: "A community cooking afternoon", category: "Food & drink", audience: "Campus community", featured: false,
      start: relativeDate(20, 13, 0), end: relativeDate(20, 16, 0), venue: "Campus Community Kitchen", location: campus, price: "₹200 ingredients",
      image: "assets/images/food-placeholder.svg", imageAlt: "Temporary artwork placeholder for an Odia-inspired cooking event",
      excerpt: "Cook together, trade family favourites, eat the evidence.",
      description: "A hands-on afternoon celebrating the flavours people grew up with and the ones they are just discovering. Work in small teams, learn a few flexible kitchen tricks, then share the meal together. The sample menu draws inspiration from Odisha favourites; allergy and ingredient details should be confirmed with organizers.",
      schedule: [["1:00 PM", "Welcome + kitchen tour"], ["1:30 PM", "Cook in small teams"], ["3:00 PM", "Share the table"]],
      host: "Campus Community Kitchen", access: "For KIIT students, staff, and invited guests. Please confirm allergy needs when registering."
    }
  ];
})();
