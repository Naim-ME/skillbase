# skillbase
A minimalist tracker for skills, projects and competitions. Break anything into micro skills (or milestones, or tasks) with optional sub-steps, check them off, and watch your progress until it’s done. Installable offline PWA with no dependencies. Your data stays on your device.

## Updates (v0.6)
- **Three sections.** A three-dot menu at the top right of the home page switches between Skills, Projects and Competitions, and the app remembers where you left off.
- **Projects** work like skills but use milestones instead of micro skills. Their tabs are In progress and Completed.
- **Competitions** use tasks and have a deadline you set with a date picker. A box shows the days left: grey at first, yellow within 7 days, and red within 3 days (including due today and overdue).
- **Competitions finish by date.** The day after the deadline a competition moves to Completed on its own, whether or not its tasks are done. Unfinished tasks stay exactly as they were.
- **Competition extras:**
  - A Participated check shows as a small green tick next to the name on the card.
  - Levels (for example Prelims, Regional, Final) can be added by hand. Each level you clear adds an equal share of progress, and while levels exist tasks no longer count. Without levels, tasks drive progress as before.
  - Completed competitions get a Result section: Participation, Rank (with a number), Finalist or Custom. The result shows on the card.
  - A Certificate checkbox gives the card a white border with a soft glow.
- **Move between sections.** Right-click a card (or hold it for half a second on a touch screen) and choose where to move it. Micro skills, milestones and tasks swap names automatically. Moving to Competitions needs a deadline added afterwards from the competition’s page, and moving out of Competitions clears the deadline. A toast with Undo follows every move.
- **Sort button** on the in-progress list: Priority or Custom for skills and projects, and Deadline, Priority or Custom for competitions. Custom is your own drag order, and the drag handles only show while Custom is selected.
- **Smoother drag and drop.** The card you drag grows slightly and follows your pointer, the others slide out of the way, and it glides into place when you let go.

## Updates (v0.5)
- Skills now have a priority. Rate a skill from 1 to 5 stars when you create it (tap the same star again to clear it). The stars show at the top right of each skill card, you can change them from the skill’s page, and they light up as you hover over them.
- Skills, micro skills and sub-steps are all editable: a pencil renames, a plus adds a step inside, and a bin deletes.
- Skills under Micro Skills are now collapsible under a dropdown menu, and it remembers whether you left it open or closed.
- Skills and steps are draggable to set your own sequence.
- New progress calculation: every micro skill gets an equal share of 100%, and its sub-steps split that share equally. For example, with English (Listening, Writing) and German (Listening), English and German are worth 50% each, each English step is 25%, and German Listening is the full 50%.