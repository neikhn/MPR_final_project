import Note from "../models/note";
import Label from "../models/label";

export const LABELS = [
  new Label("l1", "React Native"),
  new Label("l2", "Final Exam"),
  new Label("l3", "Mini Project"),
  new Label("l4", "Team Work"),
  new Label("l5", "React Basic"),
];

export const COLORS = [
  "lightseagreen",
  "skyblue",
  "lightcoral",
  "lightpink",
  "lightgreen",
  "lightblue",
  "orange",
  "palegreen",
];

export const NOTES = [
  new Note(
    "n1",
    null,
    ["l1", "l2"],
    "Final Project Preparation",
    new Date("2024-5-10T12:30:00"),
    false
  ),
  new Note(
    "n2",
    COLORS[3],
    ["l3"],
    "For our mini project!",
    new Date("2024-5-10T12:35:00"),
    true
  ),
  new Note(
    "n3",
    COLORS[4],
    ["l2"],
    "Second note!",
    new Date("2024-4-20T15:30:00"),
    false
  ),
  new Note(
    "n4",
    COLORS[5],
    ["l1"],
    "Ok the first note here!",
    new Date("2024-4-20T12:25:00"),
    false
  ),
  new Note(
    "n8",
    COLORS[1],
    ["l5"],
    "Learning React Hooks",
    new Date("2024-05-15T10:00:00"),
    false
  ),
  new Note(
    "n9",
    COLORS[2],
    ["l3", "l4"],
    "Preparing Presentation for Team Meeting",
    new Date("2024-05-16T14:00:00"),
    true
  ),
  new Note(
    "n10",
    COLORS[3],
    ["l1", "l2"],
    "Studying Redux for State Management",
    new Date("2024-05-17T12:30:00"),
    false
  ),
  new Note(
    "n11",
    COLORS[4],
    ["l5"],
    "Experimenting with React Native Animations",
    new Date("2024-05-18T09:15:00"),
    false
  ),
  new Note(
    "n12",
    COLORS[5],
    ["l3", "l4"],
    "Reviewing UI Design for Mobile App",
    new Date("2024-05-19T16:30:00"),
    true
  ),
  new Note(
    "n13",
    COLORS[6],
    ["l1", "l4"],
    "Setting up Firebase for Authentication",
    new Date("2024-05-20T11:45:00"),
    false
  ),
  new Note(
    "n14",
    COLORS[7],
    ["l2", "l3"],
    "Creating User Profiles in the Database",
    new Date("2024-05-21T13:20:00"),
    true
  ),
  new Note(
    "n15",
    COLORS[0],
    ["l5"],
    "Implementing Push Notifications with Expo",
    new Date("2024-05-22T09:30:00"),
    false
  ),
  new Note(
    "n16",
    COLORS[1],
    ["l1", "l2", "l4"],
    "Deploying React Native App to App Store",
    new Date("2024-05-23T15:10:00"),
    false
  ),
  new Note(
    "n17",
    COLORS[2],
    ["l3", "l5"],
    "Optimizing Performance for Smooth UI Rendering",
    new Date("2024-05-24T12:00:00"),
    true
  ),
  new Note(
    "n18",
    COLORS[3],
    ["l1", "l4"],
    "Debugging Network Requests with Reactotron",
    new Date("2024-05-25T14:45:00"),
    false
  ),
  new Note(
    "n19",
    COLORS[4],
    ["l2", "l3", "l5"],
    "Implementing Dark Mode in React Native App",
    new Date("2024-05-26T10:20:00"),
    true
  ),
  new Note(
    "n20",
    COLORS[5],
    ["l1", "l2"],
    "Learning about State Management with MobX",
    new Date("2024-05-27T11:55:00"),
    false
  ),
  new Note(
    "n21",
    COLORS[6],
    ["l3", "l4"],
    "Integrating Third-Party Libraries for Charts",
    new Date("2024-05-28T13:40:00"),
    true
  ),
  new Note(
    "n22",
    COLORS[7],
    ["l1", "l5"],
    "Refactoring Codebase for Scalability",
    new Date("2024-05-29T09:15:00"),
    false
  ),
];

export const TRASH = [
  new Note(
    "n5",
    COLORS[0],
    ["l4"],
    "Learn React Native Navigation",
    new Date("2024-5-10T14:30:00"),
    true
  ),
  new Note(
    "n6",
    null,
    ["l4", "l2", "l1"],
    "A simple note",
    new Date("2024-5-10T14:35:00"),
    false
  ),
  new Note(
    "n7",
    COLORS[6],
    ["l1", "l2", "l3", "l4"],
    "One more note",
    new Date("2024-4-20T15:30:00"),
    false
  ),
];
