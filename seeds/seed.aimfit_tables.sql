BEGIN;

TRUNCATE
  exercise_log,
  workout_exercises,
  workouts,
  exercises,
  users;

INSERT INTO users (id, user_name, first_name, last_name, password)
VALUES
  (1, 'Jisoo', 'Jisoo', 'Kim', 'Jisoo'),
  (2, 'Rose', 'Chaeyoung', 'Park', 'Rose');

INSERT INTO exercises (id, exercise_name, muscle)
VALUES
  (1, 'Barbell Bench Press', 'Chest'),
  (2, 'Barbell Incline Bench Press', 'Chest'),
  (3, 'Barbell Decline Bench Press', 'Chest'),
  (4, 'Cable Fly', 'Chest'),
  (5, 'Pull up', 'Back'),
  (6, 'Barbell Bent Over Row', 'Back'),
  (7, 'Cable Seated Row', 'Back'),
  (8, 'Lat Pulldown', 'Back'),
  (9, 'Rope Pulldown', 'Triceps'),
  (10, 'Dumbbell Standing Triceps Extension', 'Triceps'),
  (11, 'Dip', 'Triceps'),
  (12, 'Barbell Curl', 'Biceps'),
  (13, 'Dumbbell Curl', 'Biceps'),
  (14, 'Barbell Shoulder Press', 'Shoulders'),
  (15, 'Dumbbell Lateral Raise', 'Shoulders'),
  (16, 'Face Pull', 'Shoulders'),
  (17, 'Shrug', 'Traps'),
  (18, 'Barbell Squat', 'Quads'),
  (19, 'Leg Press', 'Quads'),
  (20, 'Leg Extensions', 'Quads'),
  (21, 'Deadlift', 'Hamstrings'),
  (22, 'Lying Leg Curl', 'Hamstrings'),
  (23, 'Seated Calf Raise', 'Calves'),
  (24, 'Dumbbell Bench Press', 'Chest'),
  (25, 'Dumbbell Incline Bench Press', 'Chest'),
  (26, 'Dumbbell Decline Bench Press', 'Chest'),
  (27, 'Dumbbell Fly', 'Chest'),
  (28, 'Machine Fly', 'Chest'),
  (29, 'T Bar Row', 'Back'),
  (30, 'Dumbbell One Arm Row', 'Back'),
  (31, 'Dumbbell Bent Over Row', 'Back'),
  (32, 'Barbell Lying Triceps Extension', 'Triceps'),
  (33, 'Cable Triceps Pushdown', 'Triceps'),
  (34, 'Barbell Lying Triceps Extension', 'Triceps'),
  (35, 'Barbell Close Grip Bench Press', 'Triceps'),
  (36, 'Barbell Preacher Curl', 'Biceps'),
  (37, 'Dumbbell Incline Curl', 'Biceps'),
  (38, 'EZ Bar Curl', 'Biceps'),
  (39, 'Dumbbell Shoulder Press', 'Shoulders'),
  (40, 'Dumbbell Front Raise Raise', 'Shoulders'),
  (41, 'Dumbbell Arnold Press', 'Shoulders'),
  (42, 'Dumbbell Bent Over Delt Raise', 'Shoulders'),
  (43, 'Barbell Front Squat', 'Quads'),
  (44, 'Seated Leg Curl', 'Hamstrings'),
  (45, 'Barbell Lunge', 'Hamstrings'),
  (46, 'Dumbbell Lunge', 'Hamstrings'),
  (47, 'Hack Squat', 'Hamstrings'),
  (48, 'Standing Calf Raise', 'Calves');

INSERT INTO workouts (id, user_id, day, title)
VALUES (1, 1, 'Monday', 'Push Workout');

INSERT INTO workout_exercises (id, workout_id, exercise_id)
VALUES
  (1, 1, 1),
  (2, 1, 2),
  (3, 1, 3);

COMMIT;