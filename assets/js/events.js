(function () {
  const relativeDate = (days, hour, minute = 0) => {
    const value = new Date();
    value.setDate(value.getDate() + days);
    value.setHours(hour, minute, 0, 0);
    return value.toISOString();
  };
  const campus = "KIIT Campus · Patia, Bhubaneswar";

  // Event concepts and society pairings are illustrative, not confirmed KSAC events. Verify dates, hosts, venues, access, and pricing before publishing real listings.
  window.SIDEQUEST_EVENTS = [
    {
      id: "campus-beats", title: "Campus Beats: After Class", subtitle: "Student bands, big campus energy", category: "Music", audience: "Students", featured: true,
      start: relativeDate(2, 19, 30), end: relativeDate(2, 23, 0), venue: "KSAC Auditorium", location: campus, price: "Free",
      image: "assets/images/campus-beats.jpg", imageAlt: "Student band performing at an intimate campus music night",
      excerpt: "Student bands, big energy, and a reason to stay out late.",
      description: "A sample Korus-style campus gig for the student bands you have been hearing about in the corridor. Expect short sets, a few possible collaborations, and time to catch up between performances. Bring a friend or show up solo — either way, you belong in the room.",
      schedule: [["7:00 PM", "Doors open + welcome set"], ["7:45 PM", "Three live student acts"], ["10:30 PM", "DJ set to close it out"]],
      host: "Korus · KIIT Music & Dance Society", access: "For KIIT students. Keep your campus ID handy."
    },
    {
      id: "pattachitra-lab", title: "Pattachitra: Paint & Pattern", subtitle: "An Odisha-inspired art afternoon", category: "Arts & culture", audience: "Open to all", featured: true,
      start: relativeDate(3, 14, 0), end: relativeDate(3, 17, 0), venue: "KIIT Student Activity Centre", location: campus, price: "₹150 materials",
      image: "assets/images/pattachitra_upscaled.jpeg", imageAlt: "An artist painting an intricate Pattachitra cloth design",
      excerpt: "Slow down, pick up a brush, make something by hand.",
      description: "A beginner-friendly workshop concept inspired by Odisha’s Pattachitra tradition. Try simple line and pattern techniques, learn how stories are built into the artwork, and make a small piece to take home. No drawing experience is needed; the guest artist and materials would be confirmed by the organizers.",
      schedule: [["2:00 PM", "Meet the artist + see the materials"], ["2:30 PM", "Try line and pattern techniques"], ["4:30 PM", "Share your work + studio hang"]],
      host: "Kraftovity · KIIT Art & Craft Society", access: "Open to all, subject to KIIT guest-entry rules. Confirm the artist, materials fee, and step-free route before publishing."
    },
    {
      id: "patia-night-bazaar", title: "Patia After Hours: Food Walk", subtitle: "Neighborhood bites, student company", category: "Food & drink", audience: "Open to all", featured: true,
      start: relativeDate(5, 17, 0), end: relativeDate(5, 20, 0), venue: "Meet at KIIT Square · Patia food walk", location: "Patia, Bhubaneswar · outside KIIT", price: "Pay vendors directly",
      image: "assets/images/food_upscaled.jpg", imageAlt: "Students exploring a warmly lit outdoor food bazaar",
      excerpt: "Dahi bara, ghuguni, sweet treats — follow your appetite through Patia.",
      description: "A relaxed evening walk through Patia’s neighborhood food spots, with stops inspired by local favorites such as dahi bara, ghuguni, and chai. Meet near KIIT Square, browse the selected stalls together, and order directly from each vendor. The sample route and vendor list need to be checked before the walk is announced.",
      schedule: [["5:00 PM", "Meet near KIIT Square"], ["5:30 PM", "First food stops + neighborhood walk"], ["7:30 PM", "Last stop for chai + wrap-up"]],
      host: "Keurig · KIIT Cooking Society", access: "Open to all. Exact route, vendor hours, and step-free access should be confirmed before the walk."
    },
    {
      id: "moonlight-movie-adda", title: "Moonlight Movie Adda", subtitle: "A film night under the open sky", category: "Film", audience: "Campus community", featured: false,
      start: relativeDate(7, 19, 0), end: relativeDate(7, 22, 0), venue: "KIIT Open-Air Theatre", location: campus, price: "Free",
      image: "assets/images/screening-1.jpg", imageAlt: "Audience watching a film in an indoor screening room",
      excerpt: "An open-air screen, a short student film, and a story to share.",
      description: "A relaxed outdoor screening concept from the KIIT Film Society: a short student-made film followed by a feature. Bring something to sit on and settle in for the evening. The film choice, screening rights, refreshments, and weather plan would all be confirmed by the organizers.",
      schedule: [["7:00 PM", "Arrive + find a place to settle"], ["7:45 PM", "Student short-film showcase"], ["8:15 PM", "Feature screening"]],
      host: "KIIT Film Society", access: "For KIIT students, staff, and invited guests. Confirm screening rights and access arrangements with the organizers."
    },
    {
      id: "made-in-bhubaneswar", title: "Made in Bhubaneswar", subtitle: "Student makers & local finds", category: "Arts & culture", audience: "Open to all", featured: false,
      start: relativeDate(9, 11, 0), end: relativeDate(9, 16, 0), venue: "Ekamra Haat · Unit III", location: "Bhubaneswar · outside KIIT", price: "Free entry",
      image: "assets/images/arts_upscaled.jpeg", imageAlt: "Visitors browsing handmade crafts at a student makers market",
      excerpt: "Meet the makers behind your new favourite thing.",
      description: "A student maker pop-up concept at Ekamra Haat, Bhubaneswar’s public craft marketplace. Browse handmade prints, textiles, small crafts, and student-made finds, meet the makers, and catch a short demo. Stall participation and venue permission would need to be arranged before this becomes a real event.",
      schedule: [["11:00 AM", "Meet at the market"], ["12:30 PM", "Meet the makers"], ["2:00 PM", "Short craft demonstrations"]],
      host: "Kraftovity × Kreative Eye", access: "Open to all. Stall availability, venue permission, and public access details must be confirmed with Ekamra Haat."
    },
    {
      id: "chai-chapters", title: "Chai & Chapters", subtitle: "A reading circle for the curious", category: "Community", audience: "Students", featured: false,
      start: relativeDate(11, 16, 0), end: relativeDate(11, 19, 0), venue: "Yara Café · KIIT Road, Patia", location: "Aryapalli, Patia · outside KIIT", price: "Pay for your own café order",
      image: "assets/images/chaichapters.jpg", imageAlt: "Friends sharing books and chai in a relaxed reading circle",
      excerpt: "Bring a book, pull up a chair, leave with a new friend.",
      description: "A low-key reading circle concept with Kronicle at a Patia café. Bring a book in any language, settle into a quiet reading stretch, then trade recommendations over a drink or snack you order from the café. Seating depends on a confirmed group booking.",
      schedule: [["4:00 PM", "Arrive + order at the café"], ["4:30 PM", "Quiet reading time"], ["5:30 PM", "Stories, recommendations + chat"]],
      host: "Kronicle · KIIT Literary Society", access: "Open to all readers. Confirm the café booking, menu, and access details before attending."
    },
    {
      id: "build-for-bhubaneswar", title: "Build for Bhubaneswar", subtitle: "A student problem-solving sprint", category: "Tech", audience: "Students", featured: false,
      start: relativeDate(14, 9, 0), end: relativeDate(14, 18, 0), venue: "KSAC · Campus 13", location: campus, price: "Free",
      image: "assets/images/tech.jpg", imageAlt: "Students collaborating on laptops in an innovation lab",
      excerpt: "One day, fresh teams, useful ideas for the city.",
      description: "A one-day, beginner-friendly sprint for KIIT students who want to make something useful for the city. Form a small team, choose a local challenge, and sketch or prototype a first idea. You do not need a finished product or a perfect pitch — just curiosity and a willingness to build.",
      schedule: [["9:00 AM", "Check-in + team matching"], ["10:30 AM", "Problem pitches + mentor circles"], ["4:00 PM", "Show what you made"]],
      host: "Konnexions · KIIT IT & Web Development Society", access: "For KIIT students and invited student teams. Bring a laptop if you have one; team matching is beginner-friendly."
    },
    {
      id: "local-lines-open-mic", title: "Open Mic: Local Lines", subtitle: "Poetry, songs & stories in any language", category: "Arts & culture", audience: "Campus community", featured: false,
      start: relativeDate(17, 18, 0), end: relativeDate(17, 21, 0), venue: "KSAC Auditorium", location: campus, price: "Free",
      image: "assets/images/open_mic_upscaled.jpg", imageAlt: "A microphone in the foreground at a warm student open-mic night",
      excerpt: "Odia, Hindi, English — bring the words you have.",
      description: "A welcoming stage-and-story night inspired by Kalakaar’s theatre work and KIIT Wordsmith’s writing community. Share a short poem, song, monologue, or story in any language, or settle into the audience and listen. First-timers are welcome; the room is here to listen, not judge.",
      schedule: [["6:00 PM", "Sign up + sound check"], ["6:30 PM", "Open-mic sets begin"], ["8:30 PM", "Last call + group jam"]],
      host: "Kalakaar × KIIT Wordsmith", access: "For the KIIT community and invited guests. Performer sign-up is first come, first served; confirm the run-of-show with organizers."
    },
    {
      id: "odia-shared-table", title: "Odia Flavours, Shared Table", subtitle: "A community cooking afternoon", category: "Food & drink", audience: "Campus community", featured: false,
      start: relativeDate(20, 13, 0), end: relativeDate(20, 16, 0), venue: "KSAC · Campus 13", location: campus, price: "₹200 ingredients",
      image: "assets/images/communityfood_upscaled.jpg", imageAlt: "Students sharing plates at an Odia-inspired community meal",
      excerpt: "Cook together, trade family favourites, eat the evidence.",
      description: "A shared-table cooking session concept inspired by Keurig’s cooking workshops and Khwaab’s social-service work. Prepare simple Odia-inspired dishes in small teams, then sit down to eat together. The menu, food-safety plan, dietary accommodations, and any outreach partner must be confirmed by the organizers.",
      schedule: [["1:00 PM", "Welcome + kitchen tour"], ["1:30 PM", "Cook in small teams"], ["3:00 PM", "Share the table"]],
      host: "Khwaab × Keurig", access: "For the KIIT community. Confirm ingredients, allergy accommodations, and the kitchen setup before registration."
    }
  ];
})();
