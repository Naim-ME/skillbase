# skillbase
A minimalist skill tracker. Break any skill into micro skills with optional sub-steps, check them off, and watch your progress until it’s mastered. Installable offline PWA with no dependencies. Your data stays on your device.

## Updates (v0.7)
- Skills now have a priority. Rate a skill from 1 to 5 stars when you create it (tap the same star again to clear it). The stars show at the top right of each skill card, you can change them from the skill’s page, and they light up as you hover over them.
- Skills, micro skills and sub-steps are all editable: a pencil renames, a plus adds a step inside, and a bin deletes.
- Skills under Micro Skills are now collapsible under a dropdown menu, and it remembers whether you left it open or closed.
- Skills and steps are draggable to set your own sequence.
- New progress calculation: every micro skill gets an equal share of 100%, and its sub-steps split that share equally. For example, with English (Listening, Writing) and German (Listening), English and German are worth 50% each, each English step is 25%, and German Listening is the full 50%.