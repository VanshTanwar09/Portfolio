# TODO - Profile Image Card Size Reduction

## Task: Reduce hero section profile image card to 280-320px

### Progress:
- [x] Understand the task and gather information
- [x] Review Home.tsx and index.css files
- [x] Create and confirm plan with user
- [x] Edit index.css to reduce image card size
- [x] Verify changes - rounded corners and glow effects preserved

### Changes to implement:
1. In `src/index.css` - Update `.hero-image-card`:
   - Change width from `min(360px, 100%)` to `min(300px, 100%)`
   - Change height from `min(420px, 100%)` to `min(300px, 100%)`
   - Keep rounded corners (2rem)
   - Keep gradient/glow effects intact

2. In `src/pages/Home.tsx` (if needed):
   - Adjust the motion.div container class `max-w-sm lg:max-w-md`
