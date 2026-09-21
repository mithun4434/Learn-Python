export type Level = 'beginner' | 'intermediate' | 'pro';

export type Activity = {
  task: string;
  starter: string;
  required: string[];
  hint: string;
  preview?: string;
  kind?: 'coding' | 'mcq';
  options?: string[];
  answer?: number;
  tasks?: Activity[];
};

export type Topic = {
  id: string;
  unit: string;
  number: string;
  title: string;
  subtitle: string;
  syllabus: string;
  sourceLabel: string;
  sourceText: string;
  levelExplanation: string;
  code: string;
  coverage: string[];
  activity: Activity;
};

export const levelInfo: Record<Level, {title:string; badge:string; summary:string; promise:string}> = {
  beginner: {
    title: 'Python for Beginners',
    badge: 'START HERE',
    summary: 'Build a complete foundation from Python basics through functions, modules and regular expressions.',
    promise: 'Short explanations, direct examples and one small coding checkpoint before every next lesson.'
  },
  intermediate: {
    title: 'Python Data Structures',
    badge: 'GO DEEPER',
    summary: 'Move beyond Python basics into data structures, algorithms and problem-solving patterns.',
    promise: 'No beginner repetition: every lesson introduces a new data-structure or algorithmic idea.'
  },
  pro: {
    title: 'Python Professional',
    badge: 'MASTER THE CORE',
    summary: 'Build production-grade Python skills: data model, architecture, concurrency, performance, APIs and security.',
    promise: 'No intermediate repetition: each lesson focuses on professional Python engineering.'
  }
};

const baseTopics: Omit<Topic, 'id'|'number'|'levelExplanation'|'code'|'activity'>[] = [
  {
    unit: 'UNIT I', title: 'What is Python?', subtitle: 'History • Need • Applications • Features',
    syllabus: 'Introduction: History of Python, Need of Python Programming, Applications; Features of Python; Limitations and Flavours of Python.',
    sourceLabel: 'Unit I • Python Language Fundamentals',
    sourceText: `It is a Programming Language.\n\nWe can develop applications by using this programming language.\n\nWe can say that, Python is a High-Level Programming Language. Immediately you may get doubt that, What is the meaning of High-Level Programming Language.\n\nHigh-Level means Programmer friendly Programming Language. This means we are not required to worry about Low-level things [i.e., Memory management, security, destroying the objects and so on.]\n\nPython is a General Purpose High Level Programming Language.\n\nHere, General Purpose means Python is not specific to a particular area, happily we can use Python for any type of application areas. For example, Desktop Applications, Web Applications, Data Science Applications, Machine learning applications and so on.\n\nPython was developed by Guido Van Rossum in 1989... In 1991, Python made available to the public.`,
    coverage: ['history of Python','need of Python programming','desktop applications','web applications','network applications','games development','data analysis','machine learning','artificial intelligence','deep learning','neural networks','IOT','data science','features and limitations','flavours of Python']
  },
  {
    unit: 'UNIT I', title: 'Python Fundamentals', subtitle: 'REPL • Scripts • Variables • Assignment • Keywords • Indentation',
    syllabus: 'Basics of Python Programming Using the REPL(Shell), Running Python Scripts, Variables, Assignment, Keywords, Input-Output, Indentation.',
    sourceLabel: 'Unit I • Python Language Fundamentals',
    sourceText: `Nothing is required, If you are in a position to read English statements, that is enough to learn Python programming.\n\nJust to print 'Hello World', C language takes 5 lines of code, Java takes 7 lines of code, But, Python takes only one line of code.\n\nprint("Hello World")\n\nWhen compared with any other programming language (C, C++, C# or Java), the easiest programming language is Python.`,
    coverage: ['REPL / Shell','running Python scripts','variables','assignment','reserved words','input-output','indentation','identifiers','case sensitivity']
  },
  {
    unit: 'UNIT I', title: 'Data Types & Typecasting', subtitle: 'Numbers • Strings • Collections • Objects • Conversion',
    syllabus: 'Overview on data types: Numbers, Strings, Lists, Set, Tuple and Dictionaries. Python data types and typecasting.',
    sourceLabel: 'Unit I • Data Types',
    sourceText: `Python contains the following in-built data types\n\n1. int\n2. float\n3. complex\n4. bool\n5. str\n6. bytes\n7. bytearray\n8. range\n9. list\n10. tuple\n11. set\n12. frozenset\n13. dict\n14. None\n\nNote: In Python, every thing is an Object.\n\na = 10\n\nIn this statement 10 is an object of class 'int'. Here, 'a' is the reference variable which is pointing to 'int' object.`,
    coverage: ['int','float','complex','bool','str','bytes','bytearray','range','list','tuple','set','frozenset','dict','None','type()','id()','int()','float()','complex()','bool()','str()']
  },
  {
    unit: 'UNIT I', title: 'Operators & Expressions', subtitle: 'Arithmetic • Comparison • Logical • Bitwise • Membership • Identity',
    syllabus: 'Operators in Python: Arithmetic Operators, Comparison (Relational) Operators, Assignment Operators, Logical Operators, Bitwise Operators, Shift Operators, Ternary operator, Membership Operators, Identity Operators, Expressions and order of evaluations.',
    sourceLabel: 'Unit I • Operators',
    sourceText: `Operators in Python: Arithmetic Operators, Comparison (Relational) Operators, Assignment Operators, Logical Operators, Bitwise Operators, Shift Operators, Ternary operator, Membership Operators, Identity Operators, Expressions and order of evaluations.\n\nIllustrative examples on all the above operators.`,
    coverage: ['+ - * / // % **','== != > < >= <=','assignment operators','and or not','& | ^ ~','<< >>','ternary operator','in / not in','is / is not','expressions','order of evaluation']
  },
  {
    unit: 'UNIT II', title: 'Input & Output', subtitle: 'input() • print() • Multiple Values • sep • end • Formatting',
    syllabus: 'Input and Output statements: input() function, reading multiple values from the keyboard in a single line, print() function, sep and end attributes, Printing formatted string, replacement operator ({}).',
    sourceLabel: 'Unit II • Input and Output Statements in Python',
    sourceText: `In this lecture we will learn about how to read the user provided input and print ouput to the end user.\n\nThe following topics we are going to discuss as part of this lecture:\n1. raw_input() vs input()\n2. Python-3 input() function\n3. How to read multiple values from the keyboard in a single line\n4. Command line arguments\n5. Output statement : print() function\n6. sep attribute\n7. end attribute\n8. Printing formatted string\n9. Replacement Operator : { }\n\nReason: The most commonly used type in any programming language is str type, that's why they gave the priority for str type as default return type of input() function.`,
    coverage: ['input()','reading multiple values','command line arguments','print()','sep','end','formatted strings','replacement operator {}']
  },
  {
    unit: 'UNIT II', title: 'Control Flow', subtitle: 'if • elif • else • for • while • break • continue • pass',
    syllabus: 'Conditional statements – if, if-else and if-elif-else statements. Iterative statements – for, while. Transfer statements – break, continue and pass.',
    sourceLabel: 'Unit II • Flow Control',
    sourceText: `Flow control describes the order in which statements will be executed at runtime.\n\nConditional Statements (or) Selection Statements: Based on some condition result, some group of statements will be executed and some group of statements will not be executed.\n\nThere is no switch statement in Python.\nThere is no do-while loop in Python.\ngoto statement is also not available in Python.\n\nIf we want to execute a group of statements multiple times then we should go for Iterative statements. Python supports 2 types of iterative statements: for loop and while loop.\n\nWe can use break statement inside loops to break loop execution based on some condition.\nWe can use continue statement to skip current iteration and continue next iteration.`,
    coverage: ['if','if-else','if-elif-else','for','while','break','continue','pass','nested loops','loop else','indentation']
  },
  {
    unit: 'UNIT III', title: 'Strings', subtitle: 'Indexing • Slicing • Search • Split • Join • Replace • Format',
    syllabus: 'Strings: Introduction to strings, Defining and Accessing strings, Operations on string - String slicing, Mathematical Operators for String, Membership operators on string, Removing spaces from the string, Finding Substrings, Counting substring in the given String, Replacing a string with another string, Splitting of Strings, Joining of Strings, Changing case of a String, Checking starting and ending part of the string, checking type of characters present in a string.',
    sourceLabel: 'Unit III • Strings',
    sourceText: `Python supports both +ve and -ve index.\n\n+ve index means left to right(Forward direction)\n-ve index means right to left(Backward direction)\n\nString slice means a part of the string (i.e, Sub string).\n\nSyntax:\nstring_Name [beginindex:endindex:step]\n\nSlicing operator returns the sub string form beginindex to endindex - 1.\n\nIf we are not specifying begin index then it will consider from beginning of the string. If we are not specifying end index then it will consider up to end of the string. The default value for step is 1.`,
    coverage: ['defining strings','positive and negative index','slice operator','+ and * operators','membership','strip whitespace','find substrings','count','replace','split','join','upper/lower case','startswith/endswith','character checks','formatting']
  },
  {
    unit: 'UNIT III', title: 'Files & Debugging', subtitle: 'Open • Read • Search • Try/Except • Write',
    syllabus: 'Files: Opening files, Text files and lines, Reading files, Searching through a file, Using try, except and open, Writing files, debugging.',
    sourceLabel: 'Unit III • Files',
    sourceText: `Files: Opening files, Text files and lines, Reading files, Searching through a file, Using try, except and open, Writing files, debugging.`,
    coverage: ['open()','text files','lines','read()','readline()','readlines()','searching through a file','try','except','writing files','debugging']
  },
  {
    unit: 'UNIT IV', title: 'Lists', subtitle: 'Indexing • Methods • Aliasing • Cloning • Nested Lists • Comprehensions',
    syllabus: 'Lists: Creation of list objects, Accessing and traversing the elements of list. Important functions of list – len(), count(), index(), append(), insert(), extend(), remove(), pop(), reverse() and sort(). Basic Operations on list: Aliasing and Cloning of List objects, Mathematical Operators for list objects, Comparing list objects, Membership operators on list, Nested Lists, List Comprehensions.',
    sourceLabel: 'Unit IV • List Data Type',
    sourceText: `If we want to represent a group of individual objects as a single entity where insertion order is preserved and duplicates are allowed, then we should go for List.\n\nInsertion order preserved.\nDuplicate objects are allowed.\nHeterogeneous objects are allowed.\nList is dynamic because based on our requirement we can increase the size and decrease the size.\n\nWe can access elements of the list either by using index or by using slice operator(:).\n\nList supports both +ve and -ve indexes.`,
    coverage: ['creation','indexing','traversal','slicing','len()','count()','index()','append()','insert()','extend()','remove()','pop()','reverse()','sort()','aliasing','cloning','+ and *','comparison','membership','nested lists','list comprehensions']
  },
  {
    unit: 'UNIT IV', title: 'Tuples', subtitle: 'Immutable Sequence • Packing • Unpacking • Functions',
    syllabus: 'Tuples: Creation of Tuple objects, Accessing elements of tuple, Mathematical operators for tuple, Important functions of Tuple – len(), count(), index(), sorted(), min(), max(), cmp(). Tuple Packing and Unpacking.',
    sourceLabel: 'Unit IV • Tuple Data Type',
    sourceText: `Tuple is exactly same as List except that it is immutable. i.e., once we creates Tuple object,we cannot perform any changes in that object. Hence Tuple is Read Only Version of List.\n\nIf our data is fixed and never changes then we should go for Tuple.`,
    coverage: ['creation','indexing','slicing','immutability','mathematical operators','len()','count()','index()','sorted()','min()','max()','cmp()','packing','unpacking','tuple comprehension','list vs tuple']
  },
  {
    unit: 'UNIT V', title: 'Sets', subtitle: 'Unique Values • Methods • Mathematical Operations • Comprehensions',
    syllabus: 'Sets: Creation of set objects, Accessing the elements of set. Important functions of set – add(), update(), copy(), pop(), remove(), discard(), clear(). Basic Operations on set - Mathematical Operators for set objects, Membership operators on list, Set Comprehensions.',
    sourceLabel: 'Unit V • Set Data Type',
    sourceText: `This method is used to add multiple items to the set.\n\nArguments are not individual elements and these are Iterable objects like List,range etc.\n\nAll elements present in the given Iterable objects will be added to the set.\n\nWe can use add() to add individual item to the Set,where as we can use update() function to add multiple items to Set.`,
    coverage: ['creation','membership','add()','update()','copy()','pop()','remove()','discard()','clear()','union','intersection','difference','symmetric difference','set comparisons','set comprehensions']
  },
  {
    unit: 'UNIT V', title: 'Dictionaries', subtitle: 'Key → Value • Update • Delete • Access Methods',
    syllabus: 'Dictionaries: Creation of Dictionary objects, Accessing elements of dictionary, Basic operations on Dictionary - Updating the Dictionary, Deleting the elements from Dictionary. Important functions of Dictionary – dict(), len(), clear(), get(), pop(), popitem(), keys(), values(), items(), copy(), setdefault().',
    sourceLabel: 'Unit V • Dictionary Data Type',
    sourceText: `Dictionaries are mutable.\nDictionaries are dynamic.\n\nWe can add entries into a dictionary as follows.\n\nSyntax :\ndel d[key]\n\nIt deletes entry associated with the specified key. If the key is not available then we will get KeyError.\n\nclear(): This function is used to remove all entries from the dictionary.`,
    coverage: ['creation','access by key','updating','deleting','dict()','len()','clear()','get()','pop()','popitem()','keys()','values()','items()','copy()','setdefault()']
  },
  {
    unit: 'UNIT VI', title: 'Functions', subtitle: 'def • return • Arguments • Scope • Recursion • lambda',
    syllabus: 'Functions - Defining Functions, Calling Functions, Types of Arguments - Keyword Arguments, Default Arguments, Variable-length arguments, Anonymous Functions, Fruitful functions (Function Returning Values), Scope of the Variables in a Function - Global and Local Variables. Recursive functions.',
    sourceLabel: 'Unit VI • Functions',
    sourceText: `The functions which are developed by programmer explicitly according to business requirements, are called user defined functions.\n\nSyntax to create user defined functions:\n\ndef function_name(parameters) :\n    Stmt 1\n    Stmt 2\n    ---\n    Stmt n\nreturn value\n\nWhile creating functions we can use 2 keywords:\n1. def (mandatory)\n2. return (optional)`,
    coverage: ['defining','calling','positional arguments','keyword arguments','default arguments','variable-length arguments','anonymous functions','fruitful functions','global/local scope','recursive functions','nested functions','filter()','map()']
  },
  {
    unit: 'UNIT VI', title: 'Modules', subtitle: 'import • from import • Reload • dir()',
    syllabus: 'Modules: Creating modules, import statement, from Import statement.',
    sourceLabel: 'Unit VI • Modules',
    sourceText: `We can solve this problem by reloading module explicitly based on our requirement. We can reload by using reload() function of imp module.\n\nimport importlib\nimportlib.reload(module1)\n\nPython provides inbuilt function dir() to list out all members of current module or a specified module.\n\ndir() ===>To list out all members of current module\ndir(moduleName)==>To list out all members of specified module`,
    coverage: ['creating modules','import','from import','module loading','reloading','importlib.reload()','dir()','module members','function vs module vs package vs library']
  },
  {
    unit: 'UNIT VI', title: 'Regular Expressions', subtitle: 'Character Classes • Quantifiers • match • search • findall • finditer',
    syllabus: 'Regular Expressions: Character matching in regular expressions, Extracting data using regular expressions, Combining searching and extracting, Escape character.',
    sourceLabel: 'Unit VI • Regular Expressions',
    sourceText: `Pre defined Character classes\n\n\\s ==> Space character\n\\S ==> Any character except space character\n\\d ==> Any digit from 0 to 9\n\\D ==> Any character except digit\n\\w ==> Any word character [a-zA-Z0-9]\n\\W ==> Any character except word character (only Special Characters includes)\n. ==> Any character including special characters\n\nWe can use quantifiers to specify the number of occurrences to match.\n\na ==> Exactly one 'a'\na+ ==> Atleast one 'a'\na* ==> Any number of a's including zero number\na? ==> Atmost one 'a', i.e., either zero number or one number\na{m} ==> Exactly m number of a's\na{m,n} ==> Minimum m number of a's and Maximum n number of a's\n\nImportant functions of 're' module: match(), fullmatch(), search(), findall(), finditer(), sub(), subn(), split(), compile().`,
    coverage: ['character sets','pre-defined character classes','quantifiers','anchors','match()','fullmatch()','search()','findall()','finditer()','sub()','subn()','split()','compile()','data extraction']
  }
];

const levelDetails: Record<Level, Array<{explain:string; code:string; activity:Activity}>> = {
  beginner: [
    { explain:'Start with the course definition: Python is a high-level, general-purpose programming language. The key is to recognize what the language is used for before memorising syntax.', code:'print("Hello World")', activity:{task:'Write the smallest Python program that prints Hello World.',starter:'',required:['print(','hello world'],hint:'Use one print() statement and the words Hello World.'} },
    { explain:'Read the course example as a pattern: statements are written directly, values are assigned to names, and indentation defines blocks. Start with readable names and one statement at a time.', code:'name = "Hello World"\nprint(name)', activity:{task:'Create a variable named name, store your name, and print it.',starter:'# write your code here\n',required:['name','print('],hint:'Assignment uses = and output uses print().' } },
    { explain:'The course material lists the built-in data types and states that everything in Python is an object. Use type() to observe the type and simple casting functions to convert values.', code:'a = 10\nprint(type(a))\nprint(int("25"))', activity:{task:'Create an integer, convert the string "25" to int, and print both results with type().',starter:'a = 10\n# convert "25"\n',required:['type(','int('],hint:'Call type(a) and int("25").' } },
    { explain:'The course groups operators into arithmetic, comparison, assignment, logical, bitwise, shift, ternary, membership and identity operators. Begin by seeing expressions as values produced by operators.', code:'a = 10\nb = 3\nprint(a + b)\nprint(a > b)\nprint("py" in "python")', activity:{task:'Use +, a comparison operator, and the membership operator in one short program.',starter:'a = 10\nb = 3\n',required:['+','>',' in '],hint:'Add one arithmetic result, one comparison, and one membership check.'} },
    { explain:'The course material explains input(), reading multiple values, print(), sep, end, formatted strings and {} replacement. Remember: input() gives text by default in Python 3, so numeric input is commonly converted.', code:'name = input("Name: ")\nprint("Hello", name)', activity:{task:'Read a name from input and print a greeting.',starter:'name = input("Name: ")\n',required:['input(','print('],hint:'Keep it simple: one input and one print.'} },
    { explain:'The course material defines flow control as the order in which statements execute. Conditions select paths, loops repeat work, and transfer statements alter the loop flow.', code:'score = 78\nif score >= 50:\n    print("Pass")\nelse:\n    print("Fail")', activity:{task:'Write an if-else program that prints Pass when score is at least 50 and Fail otherwise.',starter:'score = 70\n',required:['if ','else:','print('],hint:'Do not forget the colon and indentation.'} },
    { explain:'Strings are indexed sequences. The course material shows positive and negative indexes and the slice syntax string_Name[beginindex:endindex:step].', code:'s = "Python"\nprint(s[0])\nprint(s[1:4])\nprint(s.upper())', activity:{task:'Print the first character, a slice, and the uppercase version of a string.',starter:'s = "Python"\n',required:['s[','upper('],hint:'Use an index or slice in square brackets and call upper().' } },
    { explain:'The course unit includes opening files, reading text and lines, searching, try/except with open, writing files and debugging. Learn the file lifecycle as open → read/write → close.', code:'with open("notes.txt", "r") as f:\n    data = f.read()\nprint(data)', activity:{task:'Write code that opens a text file for reading and prints its contents.',starter:'with open("notes.txt", "r") as f:\n    # read here\n',required:['open(','read'],hint:'Use open(..., "r") and call read().' } },
    { explain:'The course material describes lists as dynamic groups where insertion order is preserved and duplicates are allowed. Indexing and slicing let you access elements.', code:'numbers = [10, 20, 30]\nnumbers.append(40)\nprint(numbers[0])', activity:{task:'Create a list, append one item, and print the first element.',starter:'numbers = [10, 20, 30]\n',required:['[','append(','[0]'],hint:'Create the list, call append(), then index it.'} },
    { explain:'The course material calls a tuple the read-only version of a list because it is immutable. It is suitable when the data is fixed and should not change.', code:'point = (10, 20)\nprint(point[0])\nprint(point[1])', activity:{task:'Create a tuple containing two values and print both using indexing.',starter:'point = (10, 20)\n',required:['(','[0]','[1]'],hint:'Use tuple indexing just like list indexing.'} },
    { explain:'The course material shows add() for one individual item and update() for multiple iterable items. Sets are useful when uniqueness and membership matter.', code:'s = {10, 20}\ns.add(30)\nprint(s)', activity:{task:'Create a set and add one new value with add().',starter:'s = {10, 20}\n',required:['{','.add('],hint:'Use curly braces to create the set and add() for one item.'} },
    { explain:'The course material states that dictionaries are mutable and dynamic. They store entries accessed by keys; deletion uses del d[key], and clear() removes all entries.', code:'user = {"name": "Hello World", "role": "student"}\nprint(user["name"])', activity:{task:'Create a dictionary with a name key and print the value using that key.',starter:'user = {"name": "Hello World"}\n',required:['{"name"','["name"]'],hint:'Create the key-value pair, then read it by key.'} },
    { explain:'The course material defines user defined functions as functions created by the programmer for business requirements. def is mandatory and return is optional.', code:'def add(a, b):\n    return a + b\n\nprint(add(10, 20))', activity:{task:'Create a function add(a, b) that returns the sum and print its result.',starter:'def add(a, b):\n    # return here\n',required:['def add','return','print('],hint:'The function should return a+b.'} },
    { explain:'Modules let you separate reusable code. The course material uses import, importlib.reload() and dir() to explain module reuse, reloading and member discovery.', code:'import math\nprint(math.sqrt(16))', activity:{task:'Import the math module and use one math function.',starter:'import math\n',required:['import','math.'],hint:'Use a member such as math.sqrt().' } },
    { explain:'Regular expressions are pattern rules. The course material introduces predefined classes such as \\d and \\w, quantifiers, and re functions including match(), fullmatch(), search(), findall() and finditer().', code:'import re\nprint(re.findall(r"\\d+", "ID 120 and ID 305"))', activity:{task:'Use re.findall() to extract all numbers from a string.',starter:'import re\ntext = "ID 120 and ID 305"\n',required:['import re','findall(','\\d'],hint:'Use a digit class and a quantifier, then call findall().' } }
  ],
  intermediate: [
    { explain:'Read the same source as an application map: desktop, web, network, games, data analysis, machine learning, AI, IOT and data science are all named in the course material. Your task is to connect one language to several domains.', code:'areas = ["Web", "Data Science", "AI"]\nfor area in areas:\n    print("Python ->", area)', activity:{task:'Build a small loop that lists at least three Python application areas named in the course material.',starter:'areas = ["Web", "Data Science", "AI"]\n',required:['for ','in ','print('],hint:'Use a list and iterate with for.'} },
    { explain:'Combine variables, assignment, keywords and indentation into a nested decision. The goal is to write readable Python that a beginner can still follow.', code:'score = 84\nstatus = "Pass" if score >= 50 else "Fail"\nprint(status)', activity:{task:'Write a conditional expression that produces Pass or Fail and then print it.',starter:'score = 84\n',required:[' if ',' else ','print('],hint:'Python conditional expressions follow: value_if_true if condition else value_if_false.'} },
    { explain:'The course material treats types as objects and demonstrates type() and id(). Intermediate work should make the value/type relationship visible instead of treating a variable as a fixed box.', code:'a = 10\nb = 10\nprint(type(a))\nprint(id(a) == id(b))\nprint(float("10.5"))', activity:{task:'Show the type of an integer, compare object identities, and convert a numeric string to float.',starter:'a = 10\nb = 10\n',required:['type(','id(','float('],hint:'Use type(), id() and float() together.'} },
    { explain:'Go beyond arithmetic: reason about precedence, logical combinations, membership and identity. The course material explicitly separates is from other operator families.', code:'a = 10\nb = 20\nprint(a < b and b < 30)\nprint("py" in "python")', activity:{task:'Create one expression that combines comparison + logical operators and one membership test.',starter:'a = 10\nb = 20\n',required:[' and ',' in '],hint:'Use comparisons joined by and, then check membership in a string or collection.'} },
    { explain:'Intermediate input should be transformed immediately. The course material example reads numbers as input, converts them with int(), and prints the sum; it also shows multiple values and formatted output.', code:'a, b = map(int, input("Enter two numbers: ").split())\nprint("The Sum:", a + b)', activity:{task:'Read two integers from one line, split them, convert them, and print their sum.',starter:'a, b = map(int, input().split())\n',required:['input(','split(','map(','print('],hint:'The course material explicitly covers reading multiple values in a single line.'} },
    { explain:'Combine selection and iteration. Use break and continue deliberately; the course material shows continue skipping an iteration and break ending the loop.', code:'for i in range(10):\n    if i % 2 == 0:\n        continue\n    if i > 7:\n        break\n    print(i)', activity:{task:'Print odd numbers but stop before the loop reaches a value greater than 7.',starter:'for i in range(10):\n    # conditions here\n    pass\n',required:['continue','break','print('],hint:'Use continue for even numbers and break for the stopping condition.'} },
    { explain:'The course material covers indexing, slicing, string operators, membership, searching, counting, replacing, splitting, joining, changing case, and character checks. Intermediate practice should combine several operations in one pipeline.', code:'s = "Python is very very easy"\nwords = s.split()\nprint("-".join(words).upper())\nprint(s.count("very"))', activity:{task:'Split a sentence into words, join them with a separator, change the case, and count a substring.',starter:'s = "Learning Python is very very easy"\n',required:['split(','join(','upper(','count('],hint:'Use split() → join() and call upper() and count().' } },
    { explain:'Use try/except around file operations, because the course material explicitly combines try, except and open. Robust programs anticipate missing files and keep the error path controlled.', code:'try:\n    with open("notes.txt") as f:\n        print(f.read())\nexcept Exception as e:\n    print("Unable to read file")', activity:{task:'Read a file safely and print a fallback message if an exception occurs.',starter:'try:\n    with open("notes.txt") as f:\n        print(f.read())\nexcept Exception as e:\n    # handle here\n    pass\n',required:['try:','except','open(','read'],hint:'Keep the file read inside try and handle the exception in except.'} },
    { explain:'Intermediate lists are about method composition: append, insert, extend, remove, pop, reverse and sort, plus aliasing/cloning and nested lists.', code:'values = [30, 10, 20]\nvalues.extend([40, 50])\nvalues.sort()\nprint(values)', activity:{task:'Extend a list, sort it, then remove one value and print the result.',starter:'values = [30, 10, 20]\n',required:['extend(','sort(','remove('],hint:'Use at least the three requested list methods.'} },
    { explain:'Tuples become more useful when you unpack them. The course material includes packing and unpacking, plus useful tuple functions such as len, count, index, sorted, min and max.', code:'record = ("Hello World", 21, "CSE")\nname, age, dept = record\nprint(name, age, dept)', activity:{task:'Pack three values into a tuple and unpack them into three variables.',starter:'record = ("Hello World", 21, "CSE")\n',required:['= record','print('],hint:'Use multiple assignment to unpack the tuple.'} },
    { explain:'The set section focuses on update versus add and on set operations. Intermediate code should use uniqueness intentionally.', code:'a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a | b)\nprint(a & b)\na.update([6, 7])', activity:{task:'Create two sets, show their union and intersection, then update one set with two values.',starter:'a = {1, 2, 3}\nb = {3, 4, 5}\n',required:['|','&','update('],hint:'Use | for union, & for intersection, and update() for multiple iterable values.'} },
    { explain:'Use dictionary methods deliberately. The course material lists get, pop, popitem, keys, values, items, copy and setdefault in addition to creation, update and delete.', code:'user = {"name":"Hello World"}\nuser.setdefault("role", "student")\nprint(user.get("role"))\nprint(list(user.items()))', activity:{task:'Add a missing key with setdefault(), read it with get(), and inspect items().',starter:'user = {"name":"Hello World"}\n',required:['setdefault(','get(','items('],hint:'Use all three methods in the same solution.'} },
    { explain:'The functions lesson includes positional, keyword, default and variable-length arguments, scope, recursion, anonymous functions and fruitful functions. Intermediate work should show more than one argument style.', code:'def total(*values):\n    return sum(values)\n\nprint(total(10, 20, 30))', activity:{task:'Write a function using variable-length arguments and return the sum.',starter:'def total(*values):\n    # return a value\n',required:['def total','*values','return'],hint:'The course material describes variable-length parameters with * and tuple-like storage.'} },
    { explain:'The course material shows that a module can be imported more than once, can be reloaded explicitly, and can be inspected with dir(). Treat a module as a boundary for reusable code.', code:'import math\nprint(dir(math)[:5])', activity:{task:'Import a standard module and use dir() to inspect its members.',starter:'import math\n',required:['import','dir(','math'],hint:'Call dir(math) and print the result.'} },
    { explain:'Intermediate regex work combines character classes, quantifiers, anchors and functions such as fullmatch, search and findall. Focus on patterns that extract useful data.', code:'import re\ntext = "IDs: 120, 305, 991"\nids = re.findall(r"\\d+", text)\nprint(ids)', activity:{task:'Extract every multi-digit number from a string using re.findall().',starter:'import re\ntext = "IDs: 120, 305, 991"\n',required:['findall(','\\d+'],hint:'Use the digit class with a + quantifier.'} }
  ],
  pro: [
    { explain:'Use the course material as a requirements matrix. Python is presented as a general-purpose language, and the course explicitly lists applications from desktop and web systems to AI, IOT and data science. Design a small data structure that maps a domain to a use case.', code:'applications = {\n    "Data Science": ["analysis", "visualization"],\n    "AI": ["machine learning", "deep learning"]\n}\nfor domain, uses in applications.items():\n    print(domain, "->", ", ".join(uses))', activity:{task:'Create a dictionary of at least two application domains with a list of uses, then iterate through it.',starter:'applications = {}\n',required:['{','for ','items(','print('],hint:'Use a dictionary whose values are lists, then iterate with items().' } },
    { explain:'Treat Python syntax as executable structure: assignment binds a name, keywords have fixed meaning, and indentation defines blocks. Write a compact function-like flow using only constructs from the source.', code:'score = 84\nstatus = "Pass" if score >= 50 else "Fail"\nprint(status)', activity:{task:'Write a two-branch program using a conditional expression and a nested if block without redundant lines.',starter:'score = 84\n',required:[' if ',' else ','if ','print('],hint:'Use the conditional expression once and a normal if block once.'} },
    { explain:'The course material emphasizes objects, type(), id(), immutable objects and reference variables. Pro-level practice should make object identity and conversion observable.', code:'a = 10\nb = a\nprint(type(a))\nprint(id(a) == id(b))\nb = int("10")\nprint(type(b))', activity:{task:'Show the type and identity relationship of two references, then perform an explicit conversion.',starter:'a = 10\nb = a\n',required:['type(','id(','int('],hint:'The course material uses id() to compare references and int() for type conversion.'} },
    { explain:'Build a compact expression engine using the operator families named in the syllabus. Keep equality and identity conceptually separate, and demonstrate membership as a different kind of test.', code:'x = 8\ny = 3\nprint(x // y, x % y)\nprint(x > y and x != 0)\nprint("py" in "python")\nprint((x is y))', activity:{task:'Write a short operator demo covering arithmetic, logical, membership and identity.',starter:'x = 8\ny = 3\n',required:['//','%',' and ',' in ',' is '],hint:'Include one example from each requested operator family.'} },
    { explain:'Treat I/O as a data transformation boundary. Read multiple values, convert them, and format the result with sep/end or a formatted string, matching the exact Unit II coverage.', code:'a, b = map(int, input("Enter two numbers: ").split())\nprint("Sum", a + b, sep=": ", end="\\n")', activity:{task:'Read two integers on one line, convert them, and print a formatted result using sep or end.',starter:'a, b = map(int, input().split())\n',required:['map(','split(','sep=','print('],hint:'The syllabus explicitly includes multiple values, sep and end.'} },
    { explain:'The flow-control material includes conditional statements, for/while loops, break, continue, pass and loop else. Build one compact routine that demonstrates deliberate control transfer.', code:'for i in range(10):\n    if i % 2 == 0:\n        continue\n    if i > 7:\n        break\n    print(i)\nelse:\n    print("completed")', activity:{task:'Write a loop that uses continue, break and a loop-else block.',starter:'for i in range(10):\n    pass\n',required:['continue','break','else:','for '],hint:'The course material has separate sections for continue, break and loops with else.'} },
    { explain:'The strings material is broad. Combine slicing, search, count, replace, split, join, case conversion and character checks into one transformation pipeline.', code:'s = "Learning Python is very very easy"\nclean = s.strip().replace("very ", "")\nwords = clean.split()\nresult = "-".join(words).upper()\nprint(result)\nprint("Python" in s)\nprint(s.count("very"))', activity:{task:'Clean a string, replace part of it, split it, join it, change case and count a substring.',starter:'s = "Learning Python is very very easy"\n',required:['strip(','replace(','split(','join(','upper(','count('],hint:'Use the exact string methods covered in the Unit III material.'} },
    { explain:'The files section is intentionally practical: open files, read lines, search data, handle exceptions, write output and debug. Your activity should model a complete read-process-write cycle.', code:'try:\n    with open("input.txt", "r") as f:\n        for line in f:\n            if "Python" in line:\n                with open("output.txt", "a") as out:\n                    out.write(line)\nexcept Exception as e:\n    print("File error")', activity:{task:'Read a file line by line, find matching lines, and write the matches to an output file safely.',starter:'try:\n    with open("input.txt") as f:\n        for line in f:\n            pass\nexcept Exception as e:\n    pass\n',required:['with open(','for line in','in line','write(','except'],hint:'Use a match condition, then write matching lines to another file.'} },
    { explain:'Pro list work combines nested data, mutation methods, cloning and comprehensions. Prefer clear transformations over long imperative loops when a comprehension expresses the same operation.', code:'matrix = [[1,2],[3,4]]\nflat = [value * value for row in matrix for value in row]\nclone = matrix.copy()\nprint(flat)', activity:{task:'Create a nested list and produce a flattened list of squared values using a list comprehension.',starter:'matrix = [[1,2],[3,4]]\n',required:['for row in','for value in','[','value * value'],hint:'A nested comprehension has one for for rows and another for values.'} },
    { explain:'Use tuple packing/unpacking as a stable data contract. Combine unpacking with useful tuple functions rather than converting to lists unnecessarily.', code:'record = ("Hello World", 21, "CSE")\nname, *details = record\nprint(name, min((10, 20, 30)), max((10,20,30)))', activity:{task:'Pack a tuple, unpack it with starred assignment, and use min/max on a tuple.',starter:'record = ("Hello World", 21, "CSE")\n',required:['*details','min(','max('],hint:'Keep the tuple immutable and demonstrate starred unpacking.'} },
    { explain:'The set section is ideal for data-cleaning logic: uniqueness, membership and mathematical set operations. Combine update(), intersection and difference in one solution.', code:'a = {1,2,3,4}\nb = {3,4,5,6}\na.update([7,8])\nprint(a & b)\nprint(a - b)\nprint(a ^ b)', activity:{task:'Update a set, then calculate intersection, difference and symmetric difference.',starter:'a = {1,2,3,4}\nb = {3,4,5,6}\n',required:['update(','&','-','^'],hint:'The course material covers mathematical operators for set objects.'} },
    { explain:'A dictionary can be treated as a structured record or lookup table. Use get(), setdefault(), items() and popitem() to show controlled access and mutation.', code:'data = {"name":"Hello World", "role":"student"}\ndata.setdefault("level", "pro")\nfor key, value in data.items():\n    print(key, value)\nremoved = data.popitem()\nprint(removed)', activity:{task:'Build a dictionary, add a default key, iterate through items and remove one entry with popitem().',starter:'data = {"name":"Hello World"}\n',required:['setdefault(','items(','popitem(','for '],hint:'Use all three dictionary methods in one coherent flow.'} },
    { explain:'The functions material covers argument kinds, scope, recursion, anonymous functions, map/filter and nested functions. Write a reusable function that composes more than one of these ideas.', code:'def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))', activity:{task:'Implement a recursive factorial function and return the result.',starter:'def factorial(n):\n    # recursive case here\n',required:['def factorial','return','factorial('],hint:'Use a base case and one recursive call.'} },
    { explain:'The module material shows reuse, reload and dir(). Pro-level work should also separate responsibilities into a module-shaped boundary instead of placing everything in one file.', code:'import math\nfrom math import sqrt\nimport importlib\nprint(dir(math)[:5])\nprint(sqrt(81))', activity:{task:'Write a snippet demonstrating import, from-import and dir() against a standard library module.',starter:'import math\n',required:['import math','from math import','dir('],hint:'Use both import styles shown in the course material.'} },
    { explain:'The regex material goes from character classes and quantifiers to extraction and the full re API. Pro-level practice should validate a structured value and then extract matching data.', code:'import re\ntext = "IDs: 120, 305, 991"\nif re.fullmatch(r"[0-9]+", "305"):\n    print("valid")\nprint(re.findall(r"\\d+", text))', activity:{task:'Validate a numeric string with fullmatch() and extract all numbers from another string with findall().',starter:'import re\ntext = "IDs: 120, 305, 991"\n',required:['fullmatch(','findall(','\\d+'],hint:'Use one regex for validation and one for extraction.'} }
  ]
};

const makeBeginnerTasks = (topic: Omit<Topic, 'id'|'number'|'levelExplanation'|'code'|'activity'>, activity: Activity): Activity[] => {
  const c = topic.coverage.slice(0, 5);
  const correct = c[0] || topic.title;
  const alt1 = c[1] || 'syntax';
  const alt2 = c[2] || 'runtime';
  const alt3 = c[3] || 'output';
  return [
    mcq(`Which concept is directly covered by the ${topic.title} lesson?`, [correct, alt1, alt2, 'machine code'], 0, `Look at the topic coverage: ${correct} is one of its core ideas.`),
    mcq(`Which item is most closely related to ${topic.title}?`, [alt2, alt3, correct, 'HTML markup'], 2, `Choose the concept listed in this lesson's coverage.`),
    mcq(`What should you practice first in ${topic.title}?`, [correct, 'GPU programming', 'assembly language', 'CSS selectors'], 0, `The first coverage item is ${correct}.`),
    codeTask(activity.task, activity.starter, activity.required, activity.hint),
    codeTask(`Create a second small ${topic.title} example using the same core idea.`, activity.starter, activity.required.slice(0, Math.max(1, Math.min(2, activity.required.length))), `Use the same core Python feature, but make your example different from the first checkpoint.`)
  ];
};

const mcq = (task:string, options:string[], answer:number, hint:string): Activity => ({task, starter:'', required:[], hint, kind:'mcq', options, answer});
const codeTask = (task:string, starter:string, required:string[] | string, hint:string): Activity => ({task, starter, required:Array.isArray(required) ? required : [required], hint, kind:'coding'});
const packTasks = (a: Activity, b: Activity, c: Activity, d: Activity, e: Activity): Activity => ({...d, tasks:[a,b,c,d,e]});

const advancedBase = (unit:string, title:string, subtitle:string, syllabus:string, sourceText:string, coverage:string[], explain:string, code:string, tasks:Activity[]): Topic => ({
  id:'', unit, number:'00', title, subtitle, syllabus, sourceLabel: unit + ' • ' + title, sourceText, levelExplanation: explain, code, coverage,
  activity:{...tasks[3], tasks}
});

const intermediateTopics: Topic[] = [
  advancedBase('DATA STRUCTURES','Complexity & Big-O','Time • Space • Trade-offs','Analyze algorithmic time and space complexity.',
    'A data structure choice affects how quickly operations can be performed. Compare operations by how their running time grows as input size increases.',
    ['Big-O','time complexity','space complexity','trade-offs'], 'Move beyond syntax: choose a structure by the cost of its operations, not just by how easy it looks.',
    'def contains(values, target):\n    for value in values:\n        if value == target:\n            return True\n    return False', [
      mcq('Which notation describes constant-time growth?', ['O(1)','O(n)','O(n²)','O(log n)'],0,'The operation does not grow with input size.'),
      mcq('A single loop over n items is usually:', ['O(1)','O(n)','O(log n)','O(n²)'],1,'Count how many times the loop can run.'),
      mcq('Space complexity measures:', ['Only CPU speed','Extra memory growth','Number of functions','Code length'],1,'Think about memory used as input grows.'),
      codeTask('Write a linear search that returns True when target exists and False otherwise.','def contains(values, target):\n    # write the search\n','return','Use a loop and return a Boolean.'),
      codeTask('Write a function that scans a list once and counts how many values are greater than a threshold.','def count_greater(values, threshold):\n    count = 0\n','for ','count += 1')
    ]),
  advancedBase('DATA STRUCTURES','Arrays & Dynamic Arrays','Indexing • Updates • Resizing','Understand contiguous sequence access and dynamic-array behavior.',
    'Array-style structures provide indexed access. Dynamic arrays grow by allocating more capacity and moving elements when required.',
    ['index access','append','insert','delete','resizing'], 'Think in terms of indexed access and the cost of inserting or removing elements.',
    'values = [10, 20, 30]\nvalues.append(40)\nprint(values[2])', [
      mcq('Indexed access in an array is typically:', ['O(1)','O(n)','O(n²)','O(log n)'],0,'An index directly identifies a position.'),
      mcq('Appending to a dynamic array is amortized:', ['O(n²)','O(n)','O(1)','O(log n)'],2,'Most appends do not require moving every element.'),
      mcq('Inserting at the beginning can require:', ['No work','Shifting elements','Sorting','Hashing'],1,'Existing elements may need new positions.'),
      codeTask('Append three values and print the element at index 1.','values = []\n','append(','values[1]'),
      codeTask('Create a list and insert a value at the beginning, then print the result.','values = [20, 30]\n','insert(0','print(')
    ]),
  advancedBase('DATA STRUCTURES','Linked Lists','Nodes • Links • Traversal','Model a sequence using nodes connected by references.',
    'A linked list stores data in nodes. Each node keeps a reference to another node, allowing traversal without requiring contiguous storage.',
    ['node','next','head','traversal','insertion'], 'A linked list is about relationships between nodes rather than numeric indexes.',
    'class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None', [
      mcq('A linked-list node commonly stores:', ['Only an index','Value and next reference','Only a key','A file handle'],1,'Nodes connect to other nodes.'),
      mcq('The first node is commonly called:', ['root','head','tailer','bucket'],1,'It is the entry point of the list.'),
      mcq('Traversal means:', ['Deleting all nodes','Visiting nodes in sequence','Sorting nodes','Hashing nodes'],1,'Follow the links one by one.'),
      codeTask('Create a Node class with value and next attributes.','class Node:\n    def __init__(self, value):\n        ','self.value','self.next'),
      codeTask('Traverse a linked list and print each node value.','current = head\nwhile current:\n    ','print(','current = current.next')
    ]),
  advancedBase('DATA STRUCTURES','Stack','LIFO • Push • Pop • Peek','Use last-in-first-out behavior for nested work and undo operations.',
    'A stack removes the most recently added item first. Push adds an item and pop removes the top item.',
    ['LIFO','push','pop','peek','call stack'], 'Stacks are useful when the newest pending item must be handled first.',
    'stack = []\nstack.append("A")\nstack.append("B")\nprint(stack.pop())', [
      mcq('Stack order is:', ['FIFO','LIFO','Random','Priority'],1,'The latest item leaves first.'),
      mcq('Which list operation behaves like stack push?', ['append()','sort()','remove()','extend()'],0,'Add at the end.'),
      mcq('Which operation removes the top item?', ['peek','pop','push','scan'],1,'It returns and removes the latest item.'),
      codeTask('Implement push and pop using a Python list.','stack = []\n','append(','pop('),
      codeTask('Use a stack to reverse a short sequence.','items = ["a", "b", "c"]\nstack = []\n','append(','pop(')
    ]),
  advancedBase('DATA STRUCTURES','Queue & Deque','FIFO • Front • Rear','Model first-in-first-out processing and double-ended queues.',
    'A queue processes items in first-in-first-out order. A deque supports efficient insertion and removal at both ends.',
    ['FIFO','front','rear','deque','enqueue','dequeue'], 'Queues are useful for scheduling work in arrival order.',
    'from collections import deque\nq = deque(["A", "B"])\nq.append("C")\nprint(q.popleft())', [
      mcq('Queue order is:', ['LIFO','FIFO','Priority','Reverse'],1,'The earliest item leaves first.'),
      mcq('Which deque method removes from the left?', ['pop','popleft','remove','leftpop'],1,'The method name explicitly names the left side.'),
      mcq('A queue is useful for:', ['Arrival-order processing','Random access','Hashing','Compilation'],0,'Think of tasks waiting in line.'),
      codeTask('Create a deque, add two values, and remove the leftmost value.','from collections import deque\nq = deque()\n','append(','popleft('),
      codeTask('Process three queued tasks until the queue is empty.','from collections import deque\nq = deque(["A","B","C"])\nwhile q:\n    ','popleft(','print(')
    ]),
  advancedBase('DATA STRUCTURES','Hash Tables','Keys • Hashing • Collisions','Understand key-based lookup and collision handling.',
    'A hash table maps keys to locations using a hash function. Collisions require a strategy so different keys can coexist.',
    ['hash','key','bucket','collision','lookup'], 'The key idea is fast average lookup by transforming a key into a location.',
    'scores = {"Ada": 95, "Linus": 98}\nprint(scores["Ada"])', [
      mcq('A hash function maps a key to:', ['A memory location or bucket index','A sorted list','A loop count','A class name'],0,'It helps locate the stored value.'),
      mcq('A collision occurs when:', ['Two keys map to the same location','A key is deleted','A list is sorted','A loop ends'],0,'Different keys can produce the same bucket.'),
      mcq('Python dictionaries are based on:', ['Hash-table style lookup','Linked-list-only lookup','Binary search only','Stacks'],0,'Dictionary keys are hashed.'),
      codeTask('Build a dictionary mapping names to scores and retrieve one value by key.','scores = {}\n','["Ada"]','print('),
      codeTask('Count word frequencies using a dictionary.','counts = {}\nwords = ["py", "py", "code"]\n','counts.get(','counts[word]')
    ]),
  advancedBase('DATA STRUCTURES','Heap & Priority Queue','Min-Heap • Max-Heap • Priority','Use heaps when the next item must be the smallest or highest-priority item.',
    'A heap maintains a partial ordering that makes the smallest item readily available in a min-heap. Python provides heapq for heap operations.',
    ['heap','heapq','heappush','heappop','priority'], 'A priority queue answers a different question from a normal queue: which item has the next priority?',
    'import heapq\nh = []\nheapq.heappush(h, 30)\nheapq.heappush(h, 10)\nprint(heapq.heappop(h))', [
      mcq('A min-heap exposes the:', ['Largest item','Smallest item','Newest item','Oldest item'],1,'The root is the minimum.'),
      mcq('Python heap operations are provided by:', ['heapq','queuex','heaplib','priority'],0,'It is a standard-library module.'),
      mcq('A priority queue removes based on:', ['Arrival only','Priority','Alphabetical order','Memory address'],1,'Priority determines the next item.'),
      codeTask('Push three numbers into a heap and pop the smallest.','import heapq\nh = []\n','heappush(','heappop('),
      codeTask('Use a heap as a simple priority queue of tuples.','import heapq\nq = []\n','heappush(q,','heappop(q)')
    ]),
  advancedBase('DATA STRUCTURES','Binary Search','Sorted Data • Halving • Bounds','Search sorted data by repeatedly reducing the search interval.',
    'Binary search works on sorted data and compares the target with the middle element, discarding half of the remaining range each step.',
    ['sorted input','midpoint','left','right','O(log n)'], 'The important requirement is sorted input. Each comparison removes roughly half the remaining candidates.',
    'def binary_search(a, target):\n    lo, hi = 0, len(a) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if a[mid] == target: return mid', [
      mcq('Binary search requires:', ['Unsorted data','Sorted data','A stack','A hash table'],1,'The algorithm relies on ordering.'),
      mcq('Each step removes roughly:', ['One item','Half the range','All items','Two ranges'],1,'The midpoint divides the search interval.'),
      mcq('Typical binary-search time is:', ['O(n)','O(log n)','O(n²)','O(1)'],1,'The range halves each step.'),
      codeTask('Implement binary search returning the index or -1.','def binary_search(a, target):\n    lo, hi = 0, len(a)-1\n    while lo <= hi:\n        ','mid =','return -1'),
      codeTask('Use binary search to find 30 in a sorted list.','values = [10,20,30,40,50]\n','binary_search(','print(')
    ]),
  advancedBase('DATA STRUCTURES','Sorting','Selection • Insertion • Merge • Built-in Sort','Compare sorting strategies and use Python sorting safely.',
    'Sorting rearranges values according to an ordering rule. Different algorithms trade simplicity, memory and running time.',
    ['sort','sorted','key','stability','complexity'], 'Choose an algorithm based on input size and constraints, while using Python’s built-in sorting when appropriate.',
    'values = [5, 2, 9, 1]\nprint(sorted(values))', [
      mcq('sorted(values) returns:', ['A new sorted list','The original list only','A set','A tuple'],0,'sorted() returns a sorted list.'),
      mcq('list.sort() primarily:', ['Sorts in place','Creates a tuple','Hashes values','Searches values'],0,'It mutates the list.'),
      mcq('A key function is used to:', ['Choose the comparison value','Open a file','Create a thread','Allocate memory'],0,'key= controls what is compared.'),
      codeTask('Sort a list in descending order using sorted().','values = [5, 2, 9, 1]\n','sorted(','reverse=True'),
      codeTask('Sort records by their score using a key function.','records = [("A", 80), ("B", 95)]\n','key=lambda','sorted(')
    ]),
  advancedBase('DATA STRUCTURES','Trees','Root • Child • Leaf • Traversal','Represent hierarchical data using nodes and parent-child relationships.',
    'A tree is a hierarchical structure with a root and connected child nodes. Leaves have no children.',
    ['root','parent','child','leaf','depth','traversal'], 'Trees model hierarchy: file systems, syntax trees and many indexing structures are tree-shaped.',
    'class TreeNode:\n    def __init__(self, value):\n        self.value = value\n        self.children = []', [
      mcq('The top node of a tree is the:', ['root','leaf','bucket','tail'],0,'It is the starting node.'),
      mcq('A node with no children is a:', ['root','leaf','parent','branch'],1,'It ends a path.'),
      mcq('Tree depth measures:', ['Distance through levels','Number of files','Hash collisions','CPU speed'],0,'Depth is about levels from the root.'),
      codeTask('Create a tree node with a value and a children list.','class TreeNode:\n    def __init__(self, value):\n        ','self.value','self.children'),
      codeTask('Add two child nodes to a parent and iterate over them.','root = TreeNode("root")\n','append(','for child in')
    ]),
  advancedBase('DATA STRUCTURES','Binary Search Trees','Ordering • Left • Right','Use the BST ordering rule to place and find values.',
    'In a binary search tree, values smaller than a node go left and larger values go right. This ordering can make search efficient when the tree is balanced.',
    ['BST','left','right','insert','search'], 'The BST rule is the central idea: left values are smaller and right values are larger.',
    'class Node:\n    def __init__(self, value):\n        self.value = value\n        self.left = None\n        self.right = None', [
      mcq('In a BST, smaller values go:', ['Left','Right','Root only','Anywhere'],0,'Follow the ordering rule.'),
      mcq('A balanced BST search can be close to:', ['O(log n)','O(n²)','O(1) always','O(n³)'],0,'Balanced height grows logarithmically.'),
      mcq('A BST node commonly has:', ['left and right references','only a parent','a file pointer','a queue'],0,'Binary means up to two children.'),
      codeTask('Create a BST node with left and right references.','class Node:\n    def __init__(self, value):\n        ','self.left = None','self.right = None'),
      codeTask('Write the basic BST search comparison for a target.','if target < node.value:\n    ','node = node.left','else:' )
    ]),
  advancedBase('DATA STRUCTURES','Graphs','Vertices • Edges • Adjacency','Represent relationships between connected entities.',
    'A graph consists of vertices and edges. Graphs can represent networks such as roads, social connections and dependencies.',
    ['vertex','edge','directed','undirected','adjacency'], 'Graphs model relationships rather than strict hierarchy. One node can connect to many others.',
    'graph = {\n    "A": ["B", "C"],\n    "B": ["A"]\n}', [
      mcq('A graph is made of:', ['Vertices and edges','Rows and columns only','Stacks only','Functions only'],0,'Nodes are connected by edges.'),
      mcq('A directed graph edge has:', ['A direction','No endpoints','Only one vertex','A priority'],0,'Think of A → B.'),
      mcq('An adjacency list stores:', ['Neighbors of each vertex','Only sorted values','Only roots','Only weights'],0,'Each vertex maps to its neighbors.'),
      codeTask('Represent a small graph using an adjacency dictionary.','graph = {\n','"A": [','"B": [') ,
      codeTask('Add a new neighbor to a vertex in an adjacency list.','graph = {"A": ["B"]}\n','append(','graph["A"]')
    ]),
  advancedBase('DATA STRUCTURES','BFS & DFS','Traversal • Visited • Queue • Stack','Traverse graphs systematically using breadth-first or depth-first strategies.',
    'Breadth-first search explores level by level using a queue. Depth-first search explores one branch deeply before backtracking.',
    ['BFS','DFS','visited','queue','stack'], 'BFS is naturally queue-based; DFS can be implemented with recursion or an explicit stack.',
    'from collections import deque\nqueue = deque(["A"])\nvisited = set()', [
      mcq('BFS commonly uses a:', ['Queue','Heap','Dictionary only','Tuple'],0,'It processes the earliest discovered vertex first.'),
      mcq('DFS can use:', ['A stack or recursion','Only a queue','Only a heap','Only sorting'],0,'Depth-first behavior needs stack-like control.'),
      mcq('A visited set prevents:', ['Repeated traversal','Sorting','Input','Compilation'],0,'Track nodes already processed.'),
      codeTask('Start a BFS with a deque and a visited set.','from collections import deque\nqueue = deque(["A"])\nvisited = {"A"}\n','popleft(','visited'),
      codeTask('Implement a simple DFS function using recursion.','def dfs(graph, node, visited):\n    ','visited.add(','for neighbor in')
    ]),
  advancedBase('DATA STRUCTURES','Trie / Prefix Search','Characters • Prefix • Children','Use a prefix tree for fast word and prefix lookup.',
    'A trie stores strings character by character. Shared prefixes share nodes, making prefix queries efficient.',
    ['trie','prefix','children','word end','autocomplete'], 'Tries are useful when the query is about prefixes, such as autocomplete and dictionary lookup.',
    'class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.end = False', [
      mcq('A trie is especially useful for:', ['Prefix queries','Numeric sorting only','File compression only','Thread scheduling'],0,'Think autocomplete.'),
      mcq('Trie edges commonly represent:', ['Characters','Threads','Files','Priorities'],0,'Each level represents part of a word.'),
      mcq('A terminal flag can indicate:', ['A complete word ends here','A node is deleted','A hash collision','A queue is empty'],0,'A prefix can also be a complete word.'),
      codeTask('Create a TrieNode with a children dictionary and end flag.','class TrieNode:\n    def __init__(self):\n        ','self.children = {}','self.end = False'),
      codeTask('Insert the word "cat" character by character into a trie.','node = root\nfor ch in "cat":\n    ','setdefault(','node =')
    ]),
];

const proTopics: Topic[] = [
  advancedBase('PRO PYTHON','Python Data Model','Objects • Protocols • Identity','Understand Python through its object and protocol model.', 'Python behavior is driven by objects and protocols. Operators, iteration, calling and attribute access can be customized through special methods.', ['objects','protocols','identity','attributes'], 'Professional Python starts with the data model: understand what Python asks an object to provide.', 'class User:\n    def __repr__(self):\n        return "User()"', [
    mcq('Python values are fundamentally:', ['Objects','Only primitives','Only records','Only functions'],0,'Python uses an object model.'), mcq('A protocol describes:', ['Expected behavior','A database schema only','A file format only','A compiler flag'],0,'Protocols are behavioral contracts.'), mcq('repr() is commonly used for:', ['Developer-facing representation','Sorting only','Networking only','Input parsing'],0,'It is useful for debugging and inspection.'), codeTask('Implement __repr__ for a class.','class User:\n    def __repr__(self):\n        ','return ','"User"'), codeTask('Implement __len__ so len(obj) works.','class Bag:\n    def __init__(self, items):\n        self.items = items\n    def __len__(self):\n        ','return len(','self.items')]),
  advancedBase('PRO PYTHON','Object-Oriented Design','Classes • Composition • Inheritance','Design reusable objects with clear responsibilities.', 'Classes combine state and behavior. Composition builds larger objects from smaller ones; inheritance should model a genuine specialization.', ['class','composition','inheritance','encapsulation'], 'Prefer small responsibilities and composition when objects collaborate.', 'class Engine:\n    def start(self):\n        print("start")\n\nclass Car:\n    def __init__(self):\n        self.engine = Engine()', [
    mcq('Composition means:', ['Building an object from collaborating objects','Copying code','Only inheriting','Sorting objects'],0,'A Car can contain an Engine.'), mcq('Inheritance should model:', ['A genuine is-a relationship','Every relationship','Database rows','File paths'],0,'Use it when specialization is real.'), mcq('Encapsulation mainly groups:', ['State and behavior','Only variables','Only functions','Only files'],0,'Objects manage their own state and operations.'), codeTask('Create a class that composes another object.','class Engine:\n    pass\n\nclass Car:\n    def __init__(self):\n        ','self.engine = Engine()','class Car'), codeTask('Create a base class and subclass that overrides a method.','class Animal:\n    def speak(self):\n        return "sound"\n\n','class Dog(Animal):','def speak')]),
  advancedBase('PRO PYTHON','Dunder Methods','__init__ • __repr__ • __eq__ • Operators','Customize standard Python operations safely.', 'Special methods connect user-defined objects to Python syntax and built-in functions.', ['dunder','__init__','__repr__','__eq__','operator overloading'], 'Implement only the protocols your type actually needs, and keep their semantics unsurprising.', 'class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __eq__(self, other):\n        return (self.x, self.y) == (other.x, other.y)', [
    mcq('__eq__ controls:', ['Equality comparison','Object construction','Iteration','Importing'],0,'It participates in ==.'), mcq('__repr__ is used by:', ['repr(obj)','len(obj)','iter(obj)','hashlib'],0,'It provides a representation.'), mcq('__init__ runs during:', ['Initialization','Garbage collection only','Sorting','Importing'],0,'It initializes a new instance.'), codeTask('Implement equality for a Point class.','class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __eq__(self, other):\n        ','return ','(other.x, other.y)'), codeTask('Implement a readable repr for a Point.','class Point:\n    def __repr__(self):\n        ','return f"Point(','self.x')]),
  advancedBase('PRO PYTHON','Decorators','Functions • Wrapping • Metadata','Use decorators to add behavior without rewriting the wrapped function.', 'A decorator receives a function and returns a callable with additional behavior.', ['decorator','wrapper','@syntax','functools.wraps'], 'A good decorator preserves the wrapped function metadata and keeps the added behavior focused.', 'from functools import wraps\ndef log_call(fn):\n    @wraps(fn)\n    def wrapper(*args, **kwargs):\n        print(fn.__name__)\n        return fn(*args, **kwargs)\n    return wrapper', [
    mcq('A decorator typically receives:', ['A callable','A file','A list only','A class name only'],0,'The wrapped target is callable.'), mcq('@name above a function means:', ['Apply a decorator','Call immediately','Import a module','Create a thread'],0,'It is decorator syntax.'), mcq('wraps helps preserve:', ['Function metadata','Database state','Thread priority','File contents'],0,'It copies useful metadata.'), codeTask('Write a decorator that prints before calling a function.','def announce(fn):\n    def wrapper(*args, **kwargs):\n        ','print(','return fn('), codeTask('Use functools.wraps in a decorator.','from functools import wraps\ndef deco(fn):\n    @wraps(fn)\n    def wrapper(*args, **kwargs):\n        ','@wraps(fn)','return wrapper')]),
  advancedBase('PRO PYTHON','Iterators & Generators','iter • next • yield','Build lazy sequences that produce values on demand.', 'An iterator supplies values through __next__. A generator function uses yield to create an iterator automatically.', ['iterator','iter','next','generator','yield'], 'Lazy iteration can reduce memory use because values are produced only when requested.', 'def countdown(n):\n    while n:\n        yield n\n        n -= 1', [
    mcq('yield creates:', ['A generator','A list immediately','A thread','A file'],0,'Generator functions pause and resume.'), mcq('next(iterator) requests:', ['The next value','The previous value','All values','The length'],0,'It advances the iterator.'), mcq('Lazy iteration can reduce:', ['Memory use','Syntax errors','Network latency always','CPU to zero'],0,'Values need not all exist at once.'), codeTask('Write a generator that yields 1, 2 and 3.','def values():\n    ','yield 1','yield 3'), codeTask('Consume a generator with next().','g = (x * x for x in range(3))\n','next(g)','print(')]),
  advancedBase('PRO PYTHON','Context Managers','with • __enter__ • __exit__','Manage setup and cleanup reliably.', 'A context manager defines what happens when entering and leaving a with block, making cleanup deterministic for supported resources.', ['with','__enter__','__exit__','cleanup'], 'Use context managers whenever a resource has a clear acquisition and release lifecycle.', 'with open("data.txt") as f:\n    text = f.read()', [
    mcq('The with statement is mainly about:', ['Resource management','Sorting','Hashing','Recursion'],0,'Think setup and cleanup.'), mcq('__enter__ runs when:', ['Entering the context','Leaving the context','Importing','Sorting'],0,'It is called at the start.'), mcq('__exit__ handles:', ['Context cleanup','List indexing','Compilation','Thread creation'],0,'It runs as the context exits.'), codeTask('Create a context manager class with __enter__ and __exit__.','class Resource:\n    def __enter__(self):\n        ','return self','def __exit__'), codeTask('Use with open() to read a file safely.','with open("data.txt") as f:\n    ','f.read(','print(')]),
  advancedBase('PRO PYTHON','Type Hints & Protocols','Generics • Typed APIs • Contracts','Make interfaces explicit with modern typing.', 'Type hints document expected shapes and help tools analyze code before runtime.', ['typing','Generic','Protocol','Optional','Callable'], 'Typing is a design aid: it makes interfaces clearer without changing Python into a statically compiled language.', 'from typing import Protocol\nclass SupportsClose(Protocol):\n    def close(self) -> None: ...', [
    mcq('Type hints primarily improve:', ['Clarity and tooling','Runtime speed always','Garbage collection','Network bandwidth'],0,'They describe expected types.'), mcq('Protocol describes:', ['Structural behavior','A database table','A file extension','A loop'],0,'Objects can satisfy a protocol by behavior.'), mcq('Callable describes:', ['Call signatures','File permissions','Thread locks','SQL rows'],0,'It represents callable types.'), codeTask('Annotate a function that takes two ints and returns an int.','def add(a: int, b: int) -> ','int','return a + b'), codeTask('Define a Protocol with a close method.','from typing import Protocol\nclass SupportsClose(Protocol):\n    ','def close(','-> None')]),
  advancedBase('PRO PYTHON','Testing & Mocking','Unit Tests • Fixtures • Mocks','Verify behavior with focused automated tests.', 'Testing turns expected behavior into executable checks. Mocks isolate a unit from external dependencies.', ['unittest','pytest concepts','assert','mock','fixtures'], 'Tests should describe behavior and fail close to the cause.', 'def add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5', [
    mcq('A unit test checks:', ['A small behavior or unit','Only deployment','Only network speed','Only formatting'],0,'Keep tests focused.'), mcq('assert is used to:', ['Check an expectation','Open a file','Start a thread','Sort data'],0,'It fails when the condition is false.'), mcq('A mock is useful to:', ['Isolate dependencies','Replace Python itself','Compile code','Sort tests'],0,'Mocks stand in for external collaborators.'), codeTask('Write a test asserting add(2,3) equals 5.','def add(a, b):\n    return a + b\n\n','assert add(2, 3)','== 5'), codeTask('Create a simple fake dependency and assert it was called.','class Fake:\n    def __init__(self): self.called = False\n    def run(self):\n        ','self.called = True','assert fake.called')]),
  advancedBase('PRO PYTHON','Packaging & Environments','venv • pip • pyproject','Keep dependencies and project boundaries reproducible.', 'Virtual environments isolate project dependencies. Packaging metadata describes how a project is built and installed.', ['venv','pip','dependencies','pyproject','package'], 'Professional projects should make installation reproducible instead of relying on global packages.', 'python -m venv .venv\npython -m pip install requests', [
    mcq('A virtual environment isolates:', ['Project dependencies','The CPU','The keyboard','The browser'],0,'It separates Python packages.'), mcq('pip primarily manages:', ['Python packages','Git commits','SQL rows','Threads'],0,'It installs and manages packages.'), mcq('Project metadata can live in:', ['pyproject.toml','image.png','notes.txt','README only'],0,'Modern Python projects use pyproject.toml.'), codeTask('Create a virtual environment command and activate it conceptually.','python -m ','venv .venv','python -m venv'), codeTask('Write a pip command to install requests.','python -m pip ','install requests','pip')]),
  advancedBase('PRO PYTHON','Profiling & Performance','Profile • Measure • Optimize','Optimize based on measurements rather than guesses.', 'Profiling identifies where a program spends time so optimization can target the real bottleneck.', ['profiling','cProfile','timeit','benchmark','hot path'], 'Measure first. Optimize the part that matters, then measure again.', 'import timeit\nprint(timeit.timeit("sum(range(100))", number=1000))', [
    mcq('Profiling helps identify:', ['Bottlenecks','Syntax only','Usernames','File names'],0,'It measures where time is spent.'), mcq('timeit is useful for:', ['Micro-benchmarks','Database schema','GUI design','Packaging'],0,'It measures small code snippets.'), mcq('Optimization should begin with:', ['Measurement','Guessing','Rewriting everything','Adding threads'],0,'Find evidence first.'), codeTask('Benchmark a small expression with timeit.','import timeit\nprint(timeit.timeit(','number=','1000))'), codeTask('Profile a function with cProfile.','import cProfile\n','cProfile.run(','my_function()')]),
  advancedBase('PRO PYTHON','Concurrency','Threads • Processes • Shared Work','Choose concurrency based on whether work is I/O-bound or CPU-bound.', 'Concurrency allows multiple tasks to make progress. Threads share memory; processes have separate memory spaces.', ['threading','multiprocessing','I/O-bound','CPU-bound'], 'The right concurrency model depends on the workload and the cost of shared state.', 'from concurrent.futures import ThreadPoolExecutor\nwith ThreadPoolExecutor() as ex:\n    results = list(ex.map(str, [1,2,3]))', [
    mcq('Threads are often useful for:', ['I/O-bound work','Only CPU-bound work','Sorting only','Compilation only'],0,'Waiting on I/O can overlap.'), mcq('Processes have:', ['Separate memory spaces','One shared stack always','No interpreter','Only one function'],0,'Processes isolate address spaces.'), mcq('Concurrency means:', ['Tasks can make progress during overlapping execution','Everything is always parallel','Only one task exists','No scheduling'],0,'Overlap is the key idea.'), codeTask('Use ThreadPoolExecutor to map a function over values.','from concurrent.futures import ThreadPoolExecutor\nwith ThreadPoolExecutor() as ex:\n    ','ex.map(','list('), codeTask('Create a multiprocessing Process target.','from multiprocessing import Process\n','Process(target=','p.start()')]),
  advancedBase('PRO PYTHON','Asyncio','async • await • Event Loop','Coordinate many I/O tasks without blocking the event loop.', 'asyncio uses cooperative scheduling. Coroutines pause at await points so other tasks can run.', ['async def','await','asyncio','event loop','Task'], 'Async code is useful when tasks spend time waiting and can yield control.', 'import asyncio\nasync def main():\n    await asyncio.sleep(0.1)\nasyncio.run(main())', [
    mcq('A coroutine is defined with:', ['async def','thread def','await def','yield class'],0,'async def creates a coroutine function.'), mcq('await means:', ['Pause this coroutine until the awaited operation progresses','Stop Python forever','Create a process','Sort a list'],0,'It yields control to the event loop.'), mcq('asyncio is suited to:', ['Many I/O tasks','Only image editing','Only sorting','Only compilation'],0,'It shines when work spends time waiting.'), codeTask('Write and run a simple async function.','import asyncio\nasync def main():\n    ','await asyncio.sleep(','asyncio.run(main())'), codeTask('Run two coroutines concurrently with gather.','import asyncio\nasync def main():\n    await asyncio.','gather(','asyncio.run(main())')]),
  advancedBase('PRO PYTHON','Memory & Garbage Collection','References • GC • Lifetimes','Reason about references and automatic memory management.', 'Python manages object lifetimes through reference tracking and garbage collection for cycles.', ['reference count','cycles','gc','lifetime'], 'Do not rely on manual freeing. Understand references so you can diagnose leaks and retained objects.', 'import gc\nprint(gc.isenabled())', [
    mcq('An object can become collectible when:', ['No references keep it reachable','A loop starts','A list is sorted','A function is defined'],0,'Reachability matters.'), mcq('The gc module helps with:', ['Garbage collection','Networking','Sorting','Packaging'],0,'It exposes garbage-collector controls.'), mcq('Reference cycles can require:', ['Cycle detection','Binary search','A heap','Regex'],0,'Cycles are not solved by simple reference counting alone.'), codeTask('Import gc and check whether automatic collection is enabled.','import gc\n','gc.isenabled(','print('), codeTask('Inspect garbage collector counts.','import gc\n','gc.get_count(','print(')]),
  advancedBase('PRO PYTHON','Databases','Connections • Queries • Transactions','Build safe database access boundaries.', 'Database code should separate connection handling, queries and transaction behavior. Parameterized queries prevent user input from becoming executable SQL.', ['DB-API','transactions','parameterized queries','connection'], 'Treat database access as a boundary: validate inputs, parameterize queries and close resources.', 'cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))', [
    mcq('Parameterized queries help prevent:', ['SQL injection','Sorting errors','Memory leaks always','Thread starvation'],0,'User data should not become SQL syntax.'), mcq('A transaction groups:', ['Related database operations','Python imports','Loops','Threads'],0,'It provides a unit of database work.'), mcq('A database connection is a:', ['Resource that should be managed','List','Decorator','Regex'],0,'Connections need lifecycle management.'), codeTask('Write a parameterized SELECT query with a placeholder.','cursor.execute(','SELECT * FROM users WHERE id = ?','(user_id,)'), codeTask('Commit a successful transaction.','try:\n    cursor.execute("UPDATE users SET active = 1")\n    ','connection.commit()','except Exception')]),
  advancedBase('PRO PYTHON','Networking & APIs','HTTP • JSON • Timeouts • Retries','Design reliable clients for external services.', 'Network calls fail in real systems. Clients need timeouts, error handling and clear data boundaries.', ['HTTP','JSON','timeout','retry','API'], 'Treat network calls as unreliable dependencies and make failure behavior explicit.', 'import requests\nr = requests.get("https://example.com", timeout=5)\nr.raise_for_status()', [
    mcq('A timeout prevents:', ['Waiting forever on a network call','All HTTP errors','All retries','JSON parsing'],0,'Bound the waiting time.'), mcq('JSON is commonly used for:', ['Structured API data','Thread locks','Sorting','Compilation'],0,'APIs often exchange JSON.'), mcq('Retries should be:', ['Bounded and deliberate','Infinite','Random always','Disabled always'],0,'Retries can amplify failures if uncontrolled.'), codeTask('Make an HTTP request with a timeout and raise HTTP errors.','import requests\nr = requests.get("https://example.com", ','timeout=5','r.raise_for_status()'), codeTask('Parse a JSON response.','import json\ndata = json.loads(','response.text','print(data)')]),
  advancedBase('PRO PYTHON','Security & Production','Secrets • Validation • Logging • Deployment','Build software that fails safely and can be operated.', 'Production code needs input validation, secret handling, logging and controlled deployment behavior.', ['validation','secrets','logging','least privilege','deployment'], 'Security is part of design: never trust input, never hard-code secrets, and make failures observable.', 'import os\nAPI_KEY = os.environ.get("API_KEY")\nif not API_KEY:\n    raise RuntimeError("Missing API key")', [
    mcq('Secrets should usually be stored in:', ['Environment or secret manager','Source code','Public comments','CSS'],0,'Keep credentials outside the repository.'), mcq('Input validation protects:', ['Program boundaries','Only colors','Only sorting','Only imports'],0,'Treat external data as untrusted.'), mcq('Logging helps with:', ['Observability','Changing Python syntax','Sorting','Compilation'],0,'Logs explain what happened in production.'), codeTask('Read an API key from an environment variable and fail if missing.','import os\nAPI_KEY = os.environ.get("API_KEY")\n','if not API_KEY:','raise RuntimeError'), codeTask('Configure a basic logger and emit an info message.','import logging\nlogging.basicConfig(level=logging.INFO)\n','logging.info(','"service started"')]),
];

export const topicsByLevel: Record<Level, Topic[]> = {
  beginner: baseTopics.map((t, i) => ({...t, id:`beginner-${i+1}`, number:String(i+1).padStart(2,'0'), levelExplanation:levelDetails.beginner[i].explain, code:levelDetails.beginner[i].code, activity:{...levelDetails.beginner[i].activity, tasks:makeBeginnerTasks(t, levelDetails.beginner[i].activity)}})),
  intermediate: intermediateTopics.map((t, i) => ({...t, id:`intermediate-${i+1}`, number:String(i+1).padStart(2,'0')})),
  pro: proTopics.map((t, i) => ({...t, id:`pro-${i+1}`, number:String(i+1).padStart(2,'0')}))
};
