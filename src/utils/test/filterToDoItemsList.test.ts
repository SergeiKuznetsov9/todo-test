import { ToDoItemsListData } from "../../mockData/mockData";
import { ViewMode } from "../../types/types";
import { filterToDoItemsList } from "../filterToDoItemsList";

describe("filterToDoItemsList", () => {
  it("should return all items when viewMode is ALL", () => {
    const result = filterToDoItemsList(ViewMode.ALL, ToDoItemsListData);
    expect(result).toEqual(ToDoItemsListData);
  });

  it("should return only active items when viewMode is ACTIVE", () => {
    const result = filterToDoItemsList(ViewMode.ACTIVE, ToDoItemsListData);
    expect(result.length).toBe(3);
    expect(result[0]).toEqual(ToDoItemsListData[1]);
    expect(result[1]).toEqual(ToDoItemsListData[3]);
    expect(result[2]).toEqual(ToDoItemsListData[4]);
  });

  it("should return only completed items when viewMode is COMPLITED", () => {
    const result = filterToDoItemsList(ViewMode.COMPLITED, ToDoItemsListData);
    expect(result.length).toBe(2);
    expect(result[0]).toEqual(ToDoItemsListData[0]);
    expect(result[1]).toEqual(ToDoItemsListData[2]);
  });

  it("should return all items by default when viewMode is invalid", () => {
    const result = filterToDoItemsList(
      "INVALID_MODE" as any,
      ToDoItemsListData
    );
    expect(result).toEqual(ToDoItemsListData);
  });

  it("should return an empty array if no toDoItems are provided", () => {
    const result = filterToDoItemsList(ViewMode.ALL, []);
    expect(result).toEqual([]);
  });

  it("should handle an empty array correctly for ACTIVE viewMode", () => {
    const result = filterToDoItemsList(ViewMode.ACTIVE, []);
    expect(result).toEqual([]);
  });

  it("should handle an empty array correctly for COMPLITED viewMode", () => {
    const result = filterToDoItemsList(ViewMode.COMPLITED, []);
    expect(result).toEqual([]);
  });
});
