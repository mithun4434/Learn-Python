export type Concept = {
  name: string;
  definition: string;
  how: string;
  purpose: string;
  example: string;
};

export const conceptMap: Record<string, Concept[]> = {
  'What is Python?': [
    { name: 'High-Level', definition: 'High-Level means Programmer friendly Programming Language.', how: 'The programmer writes readable statements while low-level activities are abstracted away.', purpose: 'Make application development easier to read and write.', example: 'print("Hello World")' },
    { name: 'General Purpose', definition: 'Python is a General Purpose High Level Programming Language.', how: 'The same language can be used across many application areas.', purpose: 'Use one language for different kinds of applications.', example: 'Desktop, Web, Data Science, Machine Learning, IOT and Data Science.' },
    { name: 'Platform Independent', definition: 'Write the Python program once and run it on any machine.', how: 'The Python program is platform independent while the Python Virtual Machine is platform dependent.', purpose: 'Move a Python application between supported platforms without changing the application.', example: 'The same Python program can run on Windows, Linux and MAC with the required PVM.' },
    { name: 'Dynamic Typing', definition: 'In Python we are not required to declare type for variables.', how: 'When a value is assigned, its type is considered automatically.', purpose: 'Provide flexibility while writing programs.', example: 'a = 10\na = 10.5\nprint(type(a))' },
    { name: 'Extensive Library', definition: 'In Python for every requirement, a readymade library is available.', how: 'Import an existing library or module and use its functionality directly.', purpose: 'Reduce the amount of code needed to implement common functionality.', example: 'from random import randint\nprint(randint(0,9))' },
  ],
  'Python Fundamentals': [
    { name: 'REPL / Shell', definition: 'The Python Shell provides an interactive way to enter and execute Python statements.', how: 'Type a statement at the prompt and Python executes it immediately.', purpose: 'Quickly experiment with Python syntax and expressions.', example: '>>> print("Hello World")' },
    { name: 'Variable', definition: 'A name in a Python program can be a variable name.', how: 'Assignment with = binds a name to an object/value.', purpose: 'Refer to data using meaningful names.', example: 'message = "Hello World"' },
    { name: 'Identifier', definition: 'A name in Python program is called identifier. It can be class name or function name or module name or variable name.', how: 'Use letters, digits and underscore, but do not start with a digit and do not use reserved words.', purpose: 'Give names to program elements.', example: 'total123 = 33' },
    { name: 'Indentation', definition: 'Python uses indentation to define a block of statements.', how: 'Statements with the same indentation belong to the same block.', purpose: 'Define control-flow and function blocks without braces.', example: 'if True:\n    print("Hello World")' },
  ],
  'Data Types & Typecasting': [
    { name: 'int', definition: 'int is one of the in-built data types listed in the course material.', how: 'Integer values are represented as int objects.', purpose: 'Represent whole-number data.', example: 'a = 10\nprint(type(a))' },
    { name: 'str', definition: 'str is one of the in-built data types listed in the course material.', how: 'Text is stored as a string object.', purpose: 'Represent character and text data.', example: 'a = "Hello World"' },
    { name: 'list', definition: 'List represents a group of individual objects as a single entity where insertion order is preserved and duplicates are allowed.', how: 'Create with [] and access with indexes or slices.', purpose: 'Store ordered, mutable collections.', example: 'items = [10, 20, 30]' },
    { name: 'tuple', definition: 'Tuple is exactly same as List except that it is immutable. i.e., once we creates Tuple object,we cannot perform any changes in that object.', how: 'Create with parentheses and read values by index.', purpose: 'Represent fixed data that does not change.', example: 'point = (10, 20)' },
    { name: 'dict', definition: 'Dictionaries are mutable. Dictionaries are dynamic.', how: 'Store and retrieve entries using key-value pairs.', purpose: 'Represent structured data and lookup tables.', example: 'user = {"name": "Hello World"}' },
    { name: 'Typecasting', definition: 'Python supports type conversion using corresponding type casting methods.', how: 'Call a type such as int(), float(), complex(), bool() or str() on a value.', purpose: 'Convert a value into the required type.', example: 'age = int("21")' },
  ],
  'Operators & Expressions': [
    { name: 'Arithmetic', definition: 'Arithmetic operators perform mathematical operations.', how: 'Use operators such as +, -, *, /, //, %, ** between operands.', purpose: 'Calculate numeric results.', example: '10 + 20' },
    { name: 'Comparison', definition: 'Comparison (Relational) Operators compare values.', how: 'Use ==, !=, >, <, >= and <= to produce a Boolean result.', purpose: 'Build conditions and decisions.', example: '10 < 20' },
    { name: 'Logical', definition: 'Logical Operators are part of the Python operator set.', how: 'Combine Boolean expressions with and, or and not.', purpose: 'Construct compound conditions.', example: 'score >= 50 and score <= 100' },
    { name: 'Membership', definition: 'Membership Operators are in / not in.', how: 'Test whether an element occurs in a collection or string.', purpose: 'Perform inclusion checks.', example: '"Py" in "Python"' },
    { name: 'Identity', definition: 'Identity Operators are is and is not.', how: 'Compare object identity rather than ordinary value equality.', purpose: 'Check whether references point to the same object.', example: 'a is b' },
  ],
  'Input & Output': [
    { name: 'input()', definition: 'Python-3 input() function is used to read dynamic input from the keyboard.', how: 'Read a string and convert it when another type is required.', purpose: 'Receive data from the user.', example: 'name = input("Enter Name:")' },
    { name: 'print()', definition: 'Output statement : print() function.', how: 'Pass values to print(); use sep and end to control formatting.', purpose: 'Display results to the end user.', example: 'print("Hello", "World", sep=" ")' },
    { name: 'sep', definition: 'sep attribute is included with print().', how: 'Set the separator inserted between multiple printed arguments.', purpose: 'Control spacing or delimiters in output.', example: 'print(1, 2, 3, sep="-")' },
    { name: 'end', definition: 'end attribute is included with print().', how: 'Set what print() writes after its arguments.', purpose: 'Control line endings and inline output.', example: 'print("Hello", end=" ")' },
    { name: 'Formatted String', definition: 'Printing formatted string is part of the course material.', how: 'Insert values into formatted text using the formatting mechanism demonstrated in the course.', purpose: 'Produce readable output.', example: 'print("The Sum: {}".format(30))' },
  ],
  'Control Flow': [
    { name: 'if', definition: 'Based on some condition result, some group of statements will be executed and some group of statements will not be executed.', how: 'Write a condition followed by a colon and indent the block.', purpose: 'Make decisions.', example: 'if 10 < 20:\n    print("Hello World")' },
    { name: 'for', definition: 'Python supports for loop as an iterative statement.', how: 'Iterate through an iterable or range and execute an indented block.', purpose: 'Repeat work for each item.', example: 'for i in range(3):\n    print(i)' },
    { name: 'while', definition: 'Python supports while loop as an iterative statement.', how: 'Repeat an indented block while a condition remains true.', purpose: 'Repeat work based on a condition.', example: 'while count < 3:\n    count += 1' },
    { name: 'break', definition: 'We can use break statement inside loops to break loop execution based on some condition.', how: 'Encountering break exits the nearest loop.', purpose: 'Stop a loop early.', example: 'if value == 0:\n    break' },
    { name: 'continue', definition: 'We can use continue statement to skip current iteration and continue next iteration.', how: 'Skip the rest of the current loop body and continue.', purpose: 'Ignore selected iterations.', example: 'if value < 0:\n    continue' },
  ],
  'Strings': [
    { name: 'Indexing', definition: '+ve index means left to right(Forward direction). -ve index means right to left(Backward direction).', how: 'Use string[index] to access one character.', purpose: 'Access specific characters.', example: 's = "Hello World"\nprint(s[0])' },
    { name: 'Slicing', definition: 'String slice means a part of the string (i.e, Sub string).', how: 'Use string_Name [beginindex:endindex:step].', purpose: 'Extract a substring or sequence of characters.', example: 's[0:5]' },
    { name: 'split()', definition: 'Splitting of Strings is included in the Unit III operations.', how: 'Convert a string into a list of pieces using a separator.', purpose: 'Break text into tokens or fields.', example: '"a-b-c".split("-")' },
    { name: 'join()', definition: 'Joining of Strings is included in the Unit III operations.', how: 'Join an iterable of strings with a separator.', purpose: 'Build a string from multiple pieces.', example: '"-".join(["a", "b", "c"])' },
    { name: 'count()', definition: 'Counting substring in the given String is included in the Unit III operations.', how: 'Call count() with a substring.', purpose: 'Count occurrences of a substring.', example: '"very very".count("very")' },
  ],
  'Files & Debugging': [
    { name: 'open()', definition: 'Files: Opening files is part of the Unit III coverage.', how: 'Open a file and work with its returned file object.', purpose: 'Read from or write to files.', example: 'f = open("input.txt")' },
    { name: 'read()', definition: 'Reading files is part of the Unit III coverage.', how: 'Read file content from an open file object.', purpose: 'Bring file data into the program.', example: 'data = f.read()' },
    { name: 'try / except', definition: 'Using try, except and open is part of the course material.', how: 'Place risky operations in try and handle exceptions in except.', purpose: 'Prevent an error from terminating the intended flow.', example: 'try:\n    data = f.read()\nexcept Exception:\n    print("Error")' },
    { name: 'write()', definition: 'Writing files is part of the Unit III coverage.', how: 'Call write() on an open file object.', purpose: 'Persist generated or processed data.', example: 'f.write("Hello World")' },
  ],
  'Lists': [
    { name: 'append()', definition: 'append() is one of the important list functions in the syllabus.', how: 'Add one item to the end of a list.', purpose: 'Grow a list incrementally.', example: 'items.append(40)' },
    { name: 'insert()', definition: 'insert() is one of the important list functions in the syllabus.', how: 'Insert an item at a specified position.', purpose: 'Place data at a chosen index.', example: 'items.insert(1, 15)' },
    { name: 'pop()', definition: 'pop() is one of the important list functions in the syllabus.', how: 'Remove and return an item from a list.', purpose: 'Remove data by position.', example: 'value = items.pop()' },
    { name: 'sort()', definition: 'sort() is one of the important list functions in the syllabus.', how: 'Reorder list elements.', purpose: 'Organize values into sorted order.', example: 'items.sort()' },
    { name: 'List Comprehension', definition: 'List Comprehensions are included in the Unit IV syllabus.', how: 'Build a list from an iterable using a compact expression.', purpose: 'Express list transformations concisely.', example: '[x*x for x in range(5)]' },
  ],
  'Tuples': [
    { name: 'Immutable', definition: 'Tuple is exactly same as List except that it is immutable.', how: 'After creation, elements cannot be changed in place.', purpose: 'Keep fixed data read-only.', example: 'point = (10, 20)' },
    { name: 'Packing', definition: 'Tuple Packing is included in the Unit IV syllabus.', how: 'Place multiple values into one tuple.', purpose: 'Bundle related values.', example: 'point = 10, 20' },
    { name: 'Unpacking', definition: 'Tuple Unpacking is included in the Unit IV syllabus.', how: 'Assign tuple elements to multiple variables.', purpose: 'Retrieve related values cleanly.', example: 'x, y = point' },
    { name: 'min() / max()', definition: 'Important functions of Tuple include min() and max().', how: 'Apply the functions to a tuple of comparable values.', purpose: 'Find extreme values.', example: 'max((10, 20, 30))' },
  ],
  'Sets': [
    { name: 'add()', definition: 'add() is listed as an important set function.', how: 'Add one item to the set.', purpose: 'Insert a single unique element.', example: 's.add(10)' },
    { name: 'update()', definition: 'update() is used to add multiple items to Set.', how: 'Add all elements from an iterable.', purpose: 'Expand a set with multiple elements.', example: 's.update([10, 20])' },
    { name: 'Membership', definition: 'Membership operators are included in the set coverage.', how: 'Use in / not in to test whether an element is present.', purpose: 'Check set inclusion.', example: '10 in s' },
    { name: 'Set Comprehension', definition: 'Set Comprehensions are included in the Unit V syllabus.', how: 'Create a set with a compact expression.', purpose: 'Transform data while keeping only unique results.', example: '{x*x for x in range(5)}' },
  ],
  'Dictionaries': [
    { name: 'Key → Value', definition: 'Dictionaries store entries that are accessed through keys.', how: 'Create key-value pairs with braces and access values by key.', purpose: 'Represent mappings and structured records.', example: 'user = {"name": "Hello World"}' },
    { name: 'get()', definition: 'get() is an important Dictionary function listed in the syllabus.', how: 'Retrieve a value for a key without direct indexing syntax.', purpose: 'Perform safe or optional lookup.', example: 'user.get("name")' },
    { name: 'items()', definition: 'items() is an important Dictionary function listed in the syllabus.', how: 'Return the dictionary entries as key-value pairs for iteration.', purpose: 'Traverse both keys and values.', example: 'for k, v in user.items():\n    print(k, v)' },
    { name: 'setdefault()', definition: 'setdefault() is an important Dictionary function listed in the syllabus.', how: 'Return a key value and add a default when the key is missing.', purpose: 'Initialize missing keys conveniently.', example: 'user.setdefault("role", "student")' },
  ],
  'Functions': [
    { name: 'def', definition: 'While creating functions we can use 2 keywords: 1. def (mandatory) 2. return (optional).', how: 'Use def followed by a function name and parameters.', purpose: 'Create reusable blocks of code.', example: 'def greet():\n    print("Hello World")' },
    { name: 'return', definition: 'return is optional when creating a user defined function.', how: 'Send a value back to the caller.', purpose: 'Produce a result from a function.', example: 'return a + b' },
    { name: 'Arguments', definition: 'The functions material includes keyword arguments, default arguments and variable-length arguments.', how: 'Pass values into parameters using the supported calling forms.', purpose: 'Make functions flexible and reusable.', example: 'def add(a, b=0):\n    return a+b' },
    { name: 'Recursion', definition: 'Recursive functions are included in the Unit VI syllabus.', how: 'A function calls itself with a smaller or simpler input until a base case is reached.', purpose: 'Solve problems that naturally repeat the same structure.', example: 'def fact(n):\n    if n == 0: return 1\n    return n * fact(n-1)' },
  ],
  'Modules': [
    { name: 'import', definition: 'Modules: Creating modules, import statement, from Import statement.', how: 'Import a module and use its names.', purpose: 'Reuse code and organize applications.', example: 'import math\nprint(math.sqrt(25))' },
    { name: 'from import', definition: 'from Import statement is included in the Unit VI syllabus.', how: 'Import selected names from a module.', purpose: 'Use a specific member directly.', example: 'from math import sqrt' },
    { name: 'dir()', definition: 'Python provides inbuilt function dir() to list out all members of current module or a specified module.', how: 'Call dir() or dir(moduleName).', purpose: 'Inspect available names.', example: 'print(dir(math))' },
    { name: 'Module', definition: 'A module is a reusable Python file containing definitions and statements.', how: 'Place code in a .py file and import it from another file.', purpose: 'Split a program into reusable parts.', example: 'import mymodule' },
  ],
  'Regular Expressions': [
    { name: '\\d', definition: '\\d ==> Any digit from 0 to 9', how: 'Use the character class inside a regular expression pattern.', purpose: 'Match numeric characters.', example: 're.findall(r"\\d+", "IDs: 120, 305")' },
    { name: 'Quantifiers', definition: 'We can use quantifiers to specify the number of occurrences to match.', how: 'Use +, *, ?, {m}, {m,n} after a pattern.', purpose: 'Control how many characters or groups should match.', example: 'a+ matches at least one a' },
    { name: 'findall()', definition: 'findall() is one of the important functions of the re module.', how: 'Search the string and return all non-overlapping matches.', purpose: 'Extract repeated matching data.', example: 're.findall(r"\\d+", text)' },
    { name: 'finditer()', definition: 'Returns an Iterator object which yields Match object for every Match.', how: 'Iterate through Match objects and inspect start(), end() and group().', purpose: 'Work with match positions and matched text.', example: 'for match in re.finditer("python", text):\n    print(match.group())' },
    { name: 'compile()', definition: 're module contains compile() function to compile a pattern into RegexObject.', how: 'Compile a pattern before reusing it.', purpose: 'Represent a reusable regex pattern object.', example: 'pattern = re.compile("python")' },
  ],
};
