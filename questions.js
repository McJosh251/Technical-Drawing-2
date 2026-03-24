const QUESTIONS = [
  {
    "question": "Which AutoCAD command is used to create straight lines?",
    "options": [
      "A. LINE",
      "B. POLYLINE",
      "C. RAY",
      "D. XLINE"
    ],
    "answer": "A"
  },
  {
    "question": "Which key is used to cancel a command in AutoCAD?",
    "options": [
      "A. Enter",
      "B. Esc",
      "C. Space bar",
      "D. Tab"
    ],
    "answer": "B"
  },
  {
    "question": "Which command creates a circle using center and radius?",
    "options": [
      "A. CIRCLE",
      "B. ARC",
      "C. DONUT",
      "D. ELLIPSE"
    ],
    "answer": "A"
  },
  {
    "question": "The command used to remove objects from a drawing is:",
    "options": [
      "A. ERASE",
      "B. DELETE",
      "C. REMOVE",
      "D. CLEAR"
    ],
    "answer": "A"
  },
  {
    "question": "Which coordinate system uses values relative to the last point picked?",
    "options": [
      "A. Absolute",
      "B. Relative Cartesian",
      "C. Polar",
      "D. World"
    ],
    "answer": "B"
  },
  {
    "question": "Which tool is used to copy objects a specified distance and direction?",
    "options": [
      "A. COPY",
      "B. MOVE",
      "C. OFFSET",
      "D. ARRAY"
    ],
    "answer": "C"
  },
  {
    "question": "In AutoCAD, which function key toggles Ortho Mode?",
    "options": [
      "A. F2",
      "B. F4",
      "C. F8",
      "D. F10"
    ],
    "answer": "C"
  },
  {
    "question": "The command used to round or connect two objects with an arc:",
    "options": [
      "A. CHAMFER",
      "B. FILLET",
      "C. TRIM",
      "D. EXTEND"
    ],
    "answer": "B"
  },
  {
    "question": "Which is the shortcut for the Zoom Extents command?",
    "options": [
      "A. ZE",
      "B. ZO",
      "C. ZW",
      "D. Z+"
    ],
    "answer": "A"
  },
  {
    "question": "Which layer property controls whether objects can be edited or not?",
    "options": [
      "A. Color",
      "B. Lineweight",
      "C. Freeze",
      "D. Lock"
    ],
    "answer": "D"
  },
  {
    "question": "The AutoCAD command used to combine lines and arcs into one object:",
    "options": [
      "A. JOIN",
      "B. BLOCK",
      "C. POLYLINE",
      "D. GROUP"
    ],
    "answer": "A"
  },
  {
    "question": "The command used to create multiple copies of an object around a center point:",
    "options": [
      "A. MIRROR",
      "B. ROTATE",
      "C. ARRAY (Polar)",
      "D. OFFSET"
    ],
    "answer": "C"
  },
  {
    "question": "Which icon represents the UCS (User Coordinate System) in AutoCAD?",
    "options": [
      "A. Grid",
      "B. Crosshair",
      "C. XYZ icon at origin",
      "D. Axis arrows"
    ],
    "answer": "C"
  },
  {
    "question": "Which command is used to divide an object into equal segments?",
    "options": [
      "A. BREAK",
      "B. DIVIDE",
      "C. MEASURE",
      "D. SPLIT"
    ],
    "answer": "B"
  },
  {
    "question": "The tool used to create parallel lines or concentric circles:",
    "options": [
      "A. OFFSET",
      "B. COPY",
      "C. SCALE",
      "D. MIRROR"
    ],
    "answer": "A"
  },
  {
    "question": "In AutoCAD, which is the default angle measurement?",
    "options": [
      "A. Decimal degrees",
      "B. Radians",
      "C. Surveyor’s units",
      "D. Gradians"
    ],
    "answer": "A"
  },
  {
    "question": "Which command is used to change the size of an object without altering proportions?",
    "options": [
      "A. SCALE",
      "B. STRETCH",
      "C. LENGTHEN",
      "D. RESIZE"
    ],
    "answer": "A"
  },
  {
    "question": "What is the shortcut for the MOVE command?",
    "options": [
      "A. MO",
      "B. M",
      "C. MV",
      "D. MV+"
    ],
    "answer": "B"
  },
  {
    "question": "The command used to cut off unwanted portions of objects:",
    "options": [
      "A. ERASE",
      "B. TRIM",
      "C. CUT",
      "D. BREAK"
    ],
    "answer": "B"
  },
  {
    "question": "Which file extension is used for AutoCAD drawing files?",
    "options": [
      "A. .DWG",
      "B. .DXF",
      "C. .DWT",
      "D. .PDF"
    ],
    "answer": "A"
  },
  {
    "question": "Which command creates a mirror image of selected objects?",
    "options": [
      "A. ROTATE",
      "B. MIRROR",
      "C. COPY",
      "D. REFLECT"
    ],
    "answer": "B"
  },
  {
    "question": "Which function key toggles object snap (OSNAP)?",
    "options": [
      "A. F2",
      "B. F3",
      "C. F5",
      "D. F7"
    ],
    "answer": "B"
  },
  {
    "question": "Which command joins two lines at an angle by extending them until they intersect?",
    "options": [
      "A. EXTEND",
      "B. TRIM",
      "C. FILLET",
      "D. CHAMFER"
    ],
    "answer": "D"
  },
  {
    "question": "Which object snap mode locates the exact center of a circle?",
    "options": [
      "A. Midpoint",
      "B. Endpoint",
      "C. Center",
      "D. Quadrant"
    ],
    "answer": "C"
  },
  {
    "question": "The object snap used to locate the middle of a line is:",
    "options": [
      "A. Midpoint",
      "B. Endpoint",
      "C. Node",
      "D. Intersection"
    ],
    "answer": "A"
  },
  {
    "question": "Which command creates text in single-line format?",
    "options": [
      "A. TEXT",
      "B. MTEXT",
      "C. DTEXT",
      "D. TEDIT"
    ],
    "answer": "A"
  },
  {
    "question": "Which command is used to dimension distances between two points?",
    "options": [
      "A. DIMLINEAR",
      "B. DIMALIGNED",
      "C. DIMRADIUS",
      "D. DIMDIAMETER"
    ],
    "answer": "A"
  },
  {
    "question": "In AutoCAD, which interface element organizes commands into tabs and panels, similar to Microsoft Office?",
    "options": [
      "A. Properties Palette",
      "B. Command Line",
      "C. Ribbon",
      "D. Status Bar"
    ],
    "answer": "C"
  },
  {
    "question": "Which command is used to create a rectangle?",
    "options": [
      "A. RECT",
      "B. RECTANGLE",
      "C. BOX",
      "D. POLYGON"
    ],
    "answer": "B"
  },
  {
    "question": "Which command is used to create a polygon with equal sides?",
    "options": [
      "A. RECTANGLE",
      "B. POLYGON",
      "C. POLYLINE",
      "D. ARRAY"
    ],
    "answer": "B"
  },
  {
    "question": "In AutoCAD, which part of the interface contains tools such as grid, snap, ortho, and object snap toggles?",
    "options": [
      "A. Quick Access Toolbar",
      "B. Command Line",
      "C. Status Bar",
      "D. Navigation Bar"
    ],
    "answer": "C"
  },
  {
    "question": "Which command enlarges or reduces objects but keeps proportions?",
    "options": [
      "A. SCALE",
      "B. STRETCH",
      "C. RESIZE",
      "D. EXPAND"
    ],
    "answer": "A"
  },
  {
    "question": "The command used to elongate or shorten objects:",
    "options": [
      "A. SCALE",
      "B. LENGTHEN",
      "C. OFFSET",
      "D. EXPLODE"
    ],
    "answer": "B"
  },
  {
    "question": "Which command converts a block back into individual objects?",
    "options": [
      "A. UNBLOCK",
      "B. BREAK",
      "C. EXPLODE",
      "D. SEPARATE"
    ],
    "answer": "C"
  },
  {
    "question": "Which command is used to save a drawing with a new name?",
    "options": [
      "A. SAVE",
      "B. SAVEAS",
      "C. EXPORT",
      "D. CLOSE"
    ],
    "answer": "B"
  },
  {
    "question": "Which AutoCAD feature allows you to switch between model space and paper space layouts?",
    "options": [
      "A. UCS",
      "B. VIEWPORTS",
      "C. LAYOUT tabs",
      "D. PLOT"
    ],
    "answer": "C"
  },
  {
    "question": "Which is NOT a valid object snap in AutoCAD?",
    "options": [
      "A. Tangent",
      "B. Apparent intersection",
      "C. Nearest",
      "D. Approximate"
    ],
    "answer": "D"
  },
  {
    "question": "The default AutoCAD template file extension is:",
    "options": [
      "A. .DWG",
      "B. .DXF",
      "C. .DWT",
      "D. .PDF"
    ],
    "answer": "C"
  },
  {
    "question": "In AutoCAD, when you select objects using a crossing window (right to left), which objects are included?",
    "options": [
      "A. Only objects fully inside the window",
      "B. Objects fully inside or touched by the window boundary",
      "C. Only objects touching the window boundary",
      "D. No objects are selected"
    ],
    "answer": "B"
  },
  {
    "question": "Which command is used to edit polylines (add/remove vertices, join, etc.)?",
    "options": [
      "A. PEDIT",
      "B. JOIN",
      "C. POLYLINE",
      "D. SPLINE"
    ],
    "answer": "A"
  },
  {
    "question": "Which command stretches objects crossed by a selection window?",
    "options": [
      "A. SCALE",
      "B. MOVE",
      "C. STRETCH",
      "D. EXTEND"
    ],
    "answer": "C"
  },
  {
    "question": "Which function key toggles grid display in AutoCAD?",
    "options": [
      "A. F3",
      "B. F5",
      "C. F7",
      "D. F9"
    ],
    "answer": "C"
  },
  {
    "question": "In AutoCAD, when selecting objects with a window selection (left to right), which objects are selected?",
    "options": [
      "A. Objects fully inside the window",
      "B. Objects touching the window boundary",
      "C. Objects both inside and outside the window",
      "D. No objects at all"
    ],
    "answer": "A"
  },
  {
    "question": "Which tool allows you to draw construction lines that extend infinitely?",
    "options": [
      "A. LINE",
      "B. XLINE",
      "C. RAY",
      "D. POLYLINE"
    ],
    "answer": "B"
  },
  {
    "question": "Which command is used to measure the distance between two points?",
    "options": [
      "A. DIST",
      "B. ID",
      "C. DIM",
      "D. CAL"
    ],
    "answer": "A"
  },
  {
    "question": "In AutoCAD, which toolbar provides one-click access to frequently used commands like New, Open, Save, Undo, and Redo?",
    "options": [
      "A. Status Bar",
      "B. Ribbon",
      "C. Quick Access Toolbar",
      "D. Properties Palette"
    ],
    "answer": "C"
  },
  {
    "question": "The AutoCAD command used to repeat the last command is:",
    "options": [
      "A. SPACE bar / Enter",
      "B. Ctrl+Z",
      "C. Esc",
      "D. Tab"
    ],
    "answer": "A"
  },
  {
    "question": "Which command creates concentric circles or arcs at a specified distance?",
    "options": [
      "A. OFFSET",
      "B. COPY",
      "C. ARRAY",
      "D. SCALE"
    ],
    "answer": "A"
  },
  {
    "question": "In AutoCAD, the UCS icon is usually placed at:",
    "options": [
      "A. Lower left corner",
      "B. Center of screen",
      "C. Upper right corner",
      "D. Any corner"
    ],
    "answer": "A"
  },
  {
    "question": "Which command is used to check the area and perimeter of a closed object?",
    "options": [
      "A. ID",
      "B. PROPERTIES",
      "C. LIST",
      "D. AREA"
    ],
    "answer": "D"
  }
];