import React from "react";
import ReactDOM from "react-dom";
import UserList, { Search, Table } from "./UserList";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("UserList", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<UserList />, div);
  });
  test("has a valid snapshot", () => {
    const component = renderer.create(<UserList />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Search", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Search>Search</Search>, div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<Search>Search</Search>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Table", () => {
  const props = {
    result: [
      {
        title: "11",
        author: "1",
        num_comments: 1,
        points: 2,
        objectID: "x",
        url: ""
      },
      {
        title: "1",
        author: "1",
        num_comments: 1,
        points: 2,
        objectID: "y",
        url: ""
      },
      {
        title: "2",
        author: "2",
        num_comments: 1,
        points: 2,
        objectID: "z",
        url: ""
      }
    ],
    pattern: "1",
    onDismiss: () => {}
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Table {...props} />, div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<Table {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shows two items in list", () => {
    const element = shallow(<Table {...props} />);

    expect(element.find(".table-row").length).toBe(2);
  });
});
