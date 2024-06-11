import Note from "../models/note";
import Label from "../models/label";

export let LABELS = [
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

export let NOTES = [
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
];

export let TRASH = [
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

export function createLabel(label) {
  LABELS.push(label);
}

export function updateLabel(labelId, newLabel) {
  const index = LABELS.findIndex(label => label.id === labelId);
  if (index !== -1) {
    LABELS[index] = newLabel;
  }
}

export function deleteLabel(labelId) {
  LABELS = LABELS.filter(label => label.id !== labelId);
}
