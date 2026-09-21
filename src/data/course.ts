export type Level = 'beginner' | 'intermediate' | 'pro';

export type Activity = {
  task: string;
  starter: string;
  required: string[];
  hint: string;
  preview?: string;
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
    title: 'Python for Intermediate',
    badge: 'GO DEEPER',
    summary: 'Revisit the same course map with denser examples, stronger combinations and practical reasoning.',
    promise: 'Every topic becomes a small problem: combine syntax, data structures and reusable code.'
  },
  pro: {
    title: 'Python for Pro',
    badge: 'MASTER THE CORE',
    summary: 'Work through the full course material as a systems-minded programmer: edge cases, composition and robust solutions.',
    promise: 'The activity is the gate: read the source, reason about it, then implement before moving on.'
  }
};

const baseTopics: Omit<Topic, 'id'|'number'|'levelExplanation'|'code'|'activity'>[] = [
  {
    unit: 'UNIT I', title: 'What is Python?', subtitle: 'History • Need • Applications • Features',
    syllabus: 'Introduction: History of Python, Need of Python Programming, Applications; Features of Python; Limitations and Flavours of Python.',
    sourceLabel: 'PDF • Unit I • Python Language Fundamentals',
    sourceText: `It is a Programming Language.\n\nWe can develop applications by using this programming language.\n\nWe can say that, Python is a High-Level Programming Language. Immediately you may get doubt that, What is the meaning of High-Level Programming Language.\n\nHigh-Level means Programmer friendly Programming Language. This means we are not required to worry about Low-level things [i.e., Memory management, security, destroying the objects and so on.]\n\nPython is a General Purpose High Level Programming Language.\n\nHere, General Purpose means Python is not specific to a particular area, happily we can use Python for any type of application areas. For example, Desktop Applications, Web Applications, Data Science Applications, Machine learning applications and so on.\n\nPython was developed by Guido Van Rossum in 1989... In 1991, Python made available to the public.`,
    coverage: ['history of Python','need of Python programming','desktop applications','web applications','network applications','games development','data analysis','machine learning','artificial intelligence','deep learning','neural networks','IOT','data science','features and limitations','flavours of Python']
  },
  {
    unit: 'UNIT I', title: 'Python Fundamentals', subtitle: 'REPL • Scripts • Variables • Assignment • Keywords • Indentation',
    syllabus: 'Basics of Python Programming Using the REPL(Shell), Running Python Scripts, Variables, Assignment, Keywords, Input-Output, Indentation.',
    sourceLabel: 'PDF • Unit I • Python Language Fundamentals',
    sourceText: `Nothing is required, If you are in a position to read English statements, that is enough to learn Python programming.\n\nJust to print 'Hello World', C language takes 5 lines of code, Java takes 7 lines of code, But, Python takes only one line of code.\n\nprint("Hello World")\n\nWhen compared with any other programming language (C, C++, C# or Java), the easiest programming language is Python.`,
    coverage: ['REPL / Shell','running Python scripts','variables','assignment','reserved words','input-output','indentation','identifiers','case sensitivity']
  },
  {
    unit: 'UNIT I', title: 'Data Types & Typecasting', subtitle: 'Numbers • Strings • Collections • Objects • Conversion',
    syllabus: 'Overview on data types: Numbers, Strings, Lists, Set, Tuple and Dictionaries. Python data types and typecasting.',
    sourceLabel: 'PDF • Unit I • Data Types',
    sourceText: `Python contains the following in-built data types\n\n1. int\n2. float\n3. complex\n4. bool\n5. str\n6. bytes\n7. bytearray\n8. range\n9. list\n10. tuple\n11. set\n12. frozenset\n13. dict\n14. None\n\nNote: In Python, every thing is an Object.\n\na = 10\n\nIn this statement 10 is an object of class 'int'. Here, 'a' is the reference variable which is pointing to 'int' object.`,
    coverage: ['int','float','complex','bool','str','bytes','bytearray','range','list','tuple','set','frozenset','dict','None','type()','id()','int()','float()','complex()','bool()','str()']
  },
  {
    unit: 'UNIT I', title: 'Operators & Expressions', subtitle: 'Arithmetic • Comparison • Logical • Bitwise • Membership • Identity',
    syllabus: 'Operators in Python: Arithmetic Operators, Comparison (Relational) Operators, Assignment Operators, Logical Operators, Bitwise Operators, Shift Operators, Ternary operator, Membership Operators, Identity Operators, Expressions and order of evaluations.',
    sourceLabel: 'PDF • Unit I • Operators',
    sourceText: `Operators in Python: Arithmetic Operators, Comparison (Relational) Operators, Assignment Operators, Logical Operators, Bitwise Operators, Shift Operators, Ternary operator, Membership Operators, Identity Operators, Expressions and order of evaluations.\n\nIllustrative examples on all the above operators.`,
    coverage: ['+ - * / // % **','== != > < >= <=','assignment operators','and or not','& | ^ ~','<< >>','ternary operator','in / not in','is / is not','expressions','order of evaluation']
  },
  {
    unit: 'UNIT II', title: 'Input & Output', subtitle: 'input() • print() • Multiple Values • sep • end • Formatting',
    syllabus: 'Input and Output statements: input() function, reading multiple values from the keyboard in a single line, print() function, sep and end attributes, Printing formatted string, replacement operator ({}).',
    sourceLabel: 'PDF • Unit II • Input and Output Statements in Python',
    sourceText: `In this lecture we will learn about how to read the user provided input and print ouput to the end user.\n\nThe following topics we are going to discuss as part of this lecture:\n1. raw_input() vs input()\n2. Python-3 input() function\n3. How to read multiple values from the keyboard in a single line\n4. Command line arguments\n5. Output statement : print() function\n6. sep attribute\n7. end attribute\n8. Printing formatted string\n9. Replacement Operator : { }\n\nReason: The most commonly used type in any programming language is str type, that's why they gave the priority for str type as default return type of input() function.`,
    coverage: ['input()','reading multiple values','command line arguments','print()','sep','end','formatted strings','replacement operator {}']
  },
  {
    unit: 'UNIT II', title: 'Control Flow', subtitle: 'if • elif • else • for • while • break • continue • pass',
    syllabus: 'Conditional statements – if, if-else and if-elif-else statements. Iterative statements – for, while. Transfer statements – break, continue and pass.',
    sourceLabel: 'PDF • Unit II • Flow Control',
    sourceText: `Flow control describes the order in which statements will be executed at runtime.\n\nConditional Statements (or) Selection Statements: Based on some condition result, some group of statements will be executed and some group of statements will not be executed.\n\nThere is no switch statement in Python.\nThere is no do-while loop in Python.\ngoto statement is also not available in Python.\n\nIf we want to execute a group of statements multiple times then we should go for Iterative statements. Python supports 2 types of iterative statements: for loop and while loop.\n\nWe can use break statement inside loops to break loop execution based on some condition.\nWe can use continue statement to skip current iteration and continue next iteration.`,
    coverage: ['if','if-else','if-elif-else','for','while','break','continue','pass','nested loops','loop else','indentation']
  },
  {
    unit: 'UNIT III', title: 'Strings', subtitle: 'Indexing • Slicing • Search • Split • Join • Replace • Format',
    syllabus: 'Strings: Introduction to strings, Defining and Accessing strings, Operations on string - String slicing, Mathematical Operators for String, Membership operators on string, Removing spaces from the string, Finding Substrings, Counting substring in the given String, Replacing a string with another string, Splitting of Strings, Joining of Strings, Changing case of a String, Checking starting and ending part of the string, checking type of characters present in a string.',
    sourceLabel: 'PDF • Unit III • Strings',
    sourceText: `Python supports both +ve and -ve index.\n\n+ve index means left to right(Forward direction)\n-ve index means right to left(Backward direction)\n\nString slice means a part of the string (i.e, Sub string).\n\nSyntax:\nstring_Name [beginindex:endindex:step]\n\nSlicing operator returns the sub string form beginindex to endindex - 1.\n\nIf we are not specifying begin index then it will consider from beginning of the string. If we are not specifying end index then it will consider up to end of the string. The default value for step is 1.`,
    coverage: ['defining strings','positive and negative index','slice operator','+ and * operators','membership','strip whitespace','find substrings','count','replace','split','join','upper/lower case','startswith/endswith','character checks','formatting']
  },
  {
    unit: 'UNIT III', title: 'Files & Debugging', subtitle: 'Open • Read • Search • Try/Except • Write',
    syllabus: 'Files: Opening files, Text files and lines, Reading files, Searching through a file, Using try, except and open, Writing files, debugging.',
    sourceLabel: 'PDF • Unit III • Files',
    sourceText: `Files: Opening files, Text files and lines, Reading files, Searching through a file, Using try, except and open, Writing files, debugging.`,
    coverage: ['open()','text files','lines','read()','readline()','readlines()','searching through a file','try','except','writing files','debugging']
  },
  {
    unit: 'UNIT IV', title: 'Lists', subtitle: 'Indexing • Methods • Aliasing • Cloning • Nested Lists • Comprehensions',
    syllabus: 'Lists: Creation of list objects, Accessing and traversing the elements of list. Important functions of list – len(), count(), index(), append(), insert(), extend(), remove(), pop(), reverse() and sort(). Basic Operations on list: Aliasing and Cloning of List objects, Mathematical Operators for list objects, Comparing list objects, Membership operators on list, Nested Lists, List Comprehensions.',
    sourceLabel: 'PDF • Unit IV • List Data Type',
    sourceText: `If we want to represent a group of individual objects as a single entity where insertion order is preserved and duplicates are allowed, then we should go for List.\n\nInsertion order preserved.\nDuplicate objects are allowed.\nHeterogeneous objects are allowed.\nList is dynamic because based on our requirement we can increase the size and decrease the size.\n\nWe can access elements of the list either by using index or by using slice operator(:).\n\nList supports both +ve and -ve indexes.`,
    coverage: ['creation','indexing','traversal','slicing','len()','count()','index()','append()','insert()','extend()','remove()','pop()','reverse()','sort()','aliasing','cloning','+ and *','comparison','membership','nested lists','list comprehensions']
  },
  {
    unit: 'UNIT IV', title: 'Tuples', subtitle: 'Immutable Sequence • Packing • Unpacking • Functions',
    syllabus: 'Tuples: Creation of Tuple objects, Accessing elements of tuple, Mathematical operators for tuple, Important functions of Tuple – len(), count(), index(), sorted(), min(), max(), cmp(). Tuple Packing and Unpacking.',
    sourceLabel: 'PDF • Unit IV • Tuple Data Type',
    sourceText: `Tuple is exactly same as List except that it is immutable. i.e., once we creates Tuple object,we cannot perform any changes in that object. Hence Tuple is Read Only Version of List.\n\nIf our data is fixed and never changes then we should go for Tuple.`,
    coverage: ['creation','indexing','slicing','immutability','mathematical operators','len()','count()','index()','sorted()','min()','max()','cmp()','packing','unpacking','tuple comprehension','list vs tuple']
  },
  {
    unit: 'UNIT V', title: 'Sets', subtitle: 'Unique Values • Methods • Mathematical Operations • Comprehensions',
    syllabus: 'Sets: Creation of set objects, Accessing the elements of set. Important functions of set – add(), update(), copy(), pop(), remove(), discard(), clear(). Basic Operations on set - Mathematical Operators for set objects, Membership operators on list, Set Comprehensions.',
    sourceLabel: 'PDF • Unit V • Set Data Type',
    sourceText: `This method is used to add multiple items to the set.\n\nArguments are not individual elements and these are Iterable objects like List,range etc.\n\nAll elements present in the given Iterable objects will be added to the set.\n\nWe can use add() to add individual item to the Set,where as we can use update() function to add multiple items to Set.`,
    coverage: ['creation','membership','add()','update()','copy()','pop()','remove()','discard()','clear()','union','intersection','difference','symmetric difference','set comparisons','set comprehensions']
  },
  {
    unit: 'UNIT V', title: 'Dictionaries', subtitle: 'Key → Value • Update • Delete • Access Methods',
    syllabus: 'Dictionaries: Creation of Dictionary objects, Accessing elements of dictionary, Basic operations on Dictionary - Updating the Dictionary, Deleting the elements from Dictionary. Important functions of Dictionary – dict(), len(), clear(), get(), pop(), popitem(), keys(), values(), items(), copy(), setdefault().',
    sourceLabel: 'PDF • Unit V • Dictionary Data Type',
    sourceText: `Dictionaries are mutable.\nDictionaries are dynamic.\n\nWe can add entries into a dictionary as follows.\n\nSyntax :\ndel d[key]\n\nIt deletes entry associated with the specified key. If the key is not available then we will get KeyError.\n\nclear(): This function is used to remove all entries from the dictionary.`,
    coverage: ['creation','access by key','updating','deleting','dict()','len()','clear()','get()','pop()','popitem()','keys()','values()','items()','copy()','setdefault()']
  },
  {
    unit: 'UNIT VI', title: 'Functions', subtitle: 'def • return • Arguments • Scope • Recursion • lambda',
    syllabus: 'Functions - Defining Functions, Calling Functions, Types of Arguments - Keyword Arguments, Default Arguments, Variable-length arguments, Anonymous Functions, Fruitful functions (Function Returning Values), Scope of the Variables in a Function - Global and Local Variables. Recursive functions.',
    sourceLabel: 'PDF • Unit VI • Functions',
    sourceText: `The functions which are developed by programmer explicitly according to business requirements, are called user defined functions.\n\nSyntax to create user defined functions:\n\ndef function_name(parameters) :\n    Stmt 1\n    Stmt 2\n    ---\n    Stmt n\nreturn value\n\nWhile creating functions we can use 2 keywords:\n1. def (mandatory)\n2. return (optional)`,
    coverage: ['defining','calling','positional arguments','keyword arguments','default arguments','variable-length arguments','anonymous functions','fruitful functions','global/local scope','recursive functions','nested functions','filter()','map()']
  },
  {
    unit: 'UNIT VI', title: 'Modules', subtitle: 'import • from import • Reload • dir()',
    syllabus: 'Modules: Creating modules, import statement, from Import statement.',
    sourceLabel: 'PDF • Unit VI • Modules',
    sourceText: `We can solve this problem by reloading module explicitly based on our requirement. We can reload by using reload() function of imp module.\n\nimport importlib\nimportlib.reload(module1)\n\nPython provides inbuilt function dir() to list out all members of current module or a specified module.\n\ndir() ===>To list out all members of current module\ndir(moduleName)==>To list out all members of specified module`,
    coverage: ['creating modules','import','from import','module loading','reloading','importlib.reload()','dir()','module members','function vs module vs package vs library']
  },
  {
    unit: 'UNIT VI', title: 'Regular Expressions', subtitle: 'Character Classes • Quantifiers • match • search • findall • finditer',
    syllabus: 'Regular Expressions: Character matching in regular expressions, Extracting data using regular expressions, Combining searching and extracting, Escape character.',
    sourceLabel: 'PDF • Unit VI • Regular Expressions',
    sourceText: `Pre defined Character classes\n\n\\s ==> Space character\n\\S ==> Any character except space character\n\\d ==> Any digit from 0 to 9\n\\D ==> Any character except digit\n\\w ==> Any word character [a-zA-Z0-9]\n\\W ==> Any character except word character (only Special Characters includes)\n. ==> Any character including special characters\n\nWe can use quantifiers to specify the number of occurrences to match.\n\na ==> Exactly one 'a'\na+ ==> Atleast one 'a'\na* ==> Any number of a's including zero number\na? ==> Atmost one 'a', i.e., either zero number or one number\na{m} ==> Exactly m number of a's\na{m,n} ==> Minimum m number of a's and Maximum n number of a's\n\nImportant functions of 're' module: match(), fullmatch(), search(), findall(), finditer(), sub(), subn(), split(), compile().`,
    coverage: ['character sets','pre-defined character classes','quantifiers','anchors','match()','fullmatch()','search()','findall()','finditer()','sub()','subn()','split()','compile()','data extraction']
  }
];

const levelDetails: Record<Level, Array<{explain:string; code:string; activity:Activity}>> = {
  beginner: [
    { explain:'Start with the PDF definition: Python is a high-level, general-purpose programming language. The key is to recognize what the language is used for before memorising syntax.', code:'print("Hello World")', activity:{task:'Write the smallest Python program that prints Hello World.',starter:'',required:['print(','hello world'],hint:'Use one print() statement and the words Hello World.'} },
    { explain:'Read the PDF example as a pattern: statements are written directly, values are assigned to names, and indentation defines blocks. Start with readable names and one statement at a time.', code:'name = "Hello World"\nprint(name)', activity:{task:'Create a variable named name, store your name, and print it.',starter:'# write your code here\n',required:['name','print('],hint:'Assignment uses = and output uses print().' } },
    { explain:'The PDF lists the built-in data types and states that everything in Python is an object. Use type() to observe the type and simple casting functions to convert values.', code:'a = 10\nprint(type(a))\nprint(int("25"))', activity:{task:'Create an integer, convert the string "25" to int, and print both results with type().',starter:'a = 10\n# convert "25"\n',required:['type(','int('],hint:'Call type(a) and int("25").' } },
    { explain:'The course groups operators into arithmetic, comparison, assignment, logical, bitwise, shift, ternary, membership and identity operators. Begin by seeing expressions as values produced by operators.', code:'a = 10\nb = 3\nprint(a + b)\nprint(a > b)\nprint("py" in "python")', activity:{task:'Use +, a comparison operator, and the membership operator in one short program.',starter:'a = 10\nb = 3\n',required:['+','>',' in '],hint:'Add one arithmetic result, one comparison, and one membership check.'} },
    { explain:'The PDF explains input(), reading multiple values, print(), sep, end, formatted strings and {} replacement. Remember: input() gives text by default in Python 3, so numeric input is commonly converted.', code:'name = input("Name: ")\nprint("Hello", name)', activity:{task:'Read a name from input and print a greeting.',starter:'name = input("Name: ")\n',required:['input(','print('],hint:'Keep it simple: one input and one print.'} },
    { explain:'The PDF defines flow control as the order in which statements execute. Conditions select paths, loops repeat work, and transfer statements alter the loop flow.', code:'score = 78\nif score >= 50:\n    print("Pass")\nelse:\n    print("Fail")', activity:{task:'Write an if-else program that prints Pass when score is at least 50 and Fail otherwise.',starter:'score = 70\n',required:['if ','else:','print('],hint:'Do not forget the colon and indentation.'} },
    { explain:'Strings are indexed sequences. The PDF shows positive and negative indexes and the slice syntax string_Name[beginindex:endindex:step].', code:'s = "Python"\nprint(s[0])\nprint(s[1:4])\nprint(s.upper())', activity:{task:'Print the first character, a slice, and the uppercase version of a string.',starter:'s = "Python"\n',required:['s[','upper('],hint:'Use an index or slice in square brackets and call upper().' } },
    { explain:'The PDF unit includes opening files, reading text and lines, searching, try/except with open, writing files and debugging. Learn the file lifecycle as open → read/write → close.', code:'with open("notes.txt", "r") as f:\n    data = f.read()\nprint(data)', activity:{task:'Write code that opens a text file for reading and prints its contents.',starter:'with open("notes.txt", "r") as f:\n    # read here\n',required:['open(','read'],hint:'Use open(..., "r") and call read().' } },
    { explain:'The PDF describes lists as dynamic groups where insertion order is preserved and duplicates are allowed. Indexing and slicing let you access elements.', code:'numbers = [10, 20, 30]\nnumbers.append(40)\nprint(numbers[0])', activity:{task:'Create a list, append one item, and print the first element.',starter:'numbers = [10, 20, 30]\n',required:['[','append(','[0]'],hint:'Create the list, call append(), then index it.'} },
    { explain:'The PDF calls a tuple the read-only version of a list because it is immutable. It is suitable when the data is fixed and should not change.', code:'point = (10, 20)\nprint(point[0])\nprint(point[1])', activity:{task:'Create a tuple containing two values and print both using indexing.',starter:'point = (10, 20)\n',required:['(','[0]','[1]'],hint:'Use tuple indexing just like list indexing.'} },
    { explain:'The PDF shows add() for one individual item and update() for multiple iterable items. Sets are useful when uniqueness and membership matter.', code:'s = {10, 20}\ns.add(30)\nprint(s)', activity:{task:'Create a set and add one new value with add().',starter:'s = {10, 20}\n',required:['{','.add('],hint:'Use curly braces to create the set and add() for one item.'} },
    { explain:'The PDF states that dictionaries are mutable and dynamic. They store entries accessed by keys; deletion uses del d[key], and clear() removes all entries.', code:'user = {"name": "Hello World", "role": "student"}\nprint(user["name"])', activity:{task:'Create a dictionary with a name key and print the value using that key.',starter:'user = {"name": "Hello World"}\n',required:['{"name"','["name"]'],hint:'Create the key-value pair, then read it by key.'} },
    { explain:'The PDF defines user defined functions as functions created by the programmer for business requirements. def is mandatory and return is optional.', code:'def add(a, b):\n    return a + b\n\nprint(add(10, 20))', activity:{task:'Create a function add(a, b) that returns the sum and print its result.',starter:'def add(a, b):\n    # return here\n',required:['def add','return','print('],hint:'The function should return a+b.'} },
    { explain:'Modules let you separate reusable code. The PDF uses import, importlib.reload() and dir() to explain module reuse, reloading and member discovery.', code:'import math\nprint(math.sqrt(16))', activity:{task:'Import the math module and use one math function.',starter:'import math\n',required:['import','math.'],hint:'Use a member such as math.sqrt().' } },
    { explain:'Regular expressions are pattern rules. The PDF introduces predefined classes such as \\d and \\w, quantifiers, and re functions including match(), fullmatch(), search(), findall() and finditer().', code:'import re\nprint(re.findall(r"\\d+", "ID 120 and ID 305"))', activity:{task:'Use re.findall() to extract all numbers from a string.',starter:'import re\ntext = "ID 120 and ID 305"\n',required:['import re','findall(','\\d'],hint:'Use a digit class and a quantifier, then call findall().' } }
  ],
  intermediate: [
    { explain:'Read the same source as an application map: desktop, web, network, games, data analysis, machine learning, AI, IOT and data science are all named in the course material. Your task is to connect one language to several domains.', code:'areas = ["Web", "Data Science", "AI"]\nfor area in areas:\n    print("Python ->", area)', activity:{task:'Build a small loop that lists at least three Python application areas named in the PDF.',starter:'areas = ["Web", "Data Science", "AI"]\n',required:['for ','in ','print('],hint:'Use a list and iterate with for.'} },
    { explain:'Combine variables, assignment, keywords and indentation into a nested decision. The goal is to write readable Python that a beginner can still follow.', code:'score = 84\nstatus = "Pass" if score >= 50 else "Fail"\nprint(status)', activity:{task:'Write a conditional expression that produces Pass or Fail and then print it.',starter:'score = 84\n',required:[' if ',' else ','print('],hint:'Python conditional expressions follow: value_if_true if condition else value_if_false.'} },
    { explain:'The PDF treats types as objects and demonstrates type() and id(). Intermediate work should make the value/type relationship visible instead of treating a variable as a fixed box.', code:'a = 10\nb = 10\nprint(type(a))\nprint(id(a) == id(b))\nprint(float("10.5"))', activity:{task:'Show the type of an integer, compare object identities, and convert a numeric string to float.',starter:'a = 10\nb = 10\n',required:['type(','id(','float('],hint:'Use type(), id() and float() together.'} },
    { explain:'Go beyond arithmetic: reason about precedence, logical combinations, membership and identity. The PDF explicitly separates is from other operator families.', code:'a = 10\nb = 20\nprint(a < b and b < 30)\nprint("py" in "python")', activity:{task:'Create one expression that combines comparison + logical operators and one membership test.',starter:'a = 10\nb = 20\n',required:[' and ',' in '],hint:'Use comparisons joined by and, then check membership in a string or collection.'} },
    { explain:'Intermediate input should be transformed immediately. The PDF example reads numbers as input, converts them with int(), and prints the sum; it also shows multiple values and formatted output.', code:'a, b = map(int, input("Enter two numbers: ").split())\nprint("The Sum:", a + b)', activity:{task:'Read two integers from one line, split them, convert them, and print their sum.',starter:'a, b = map(int, input().split())\n',required:['input(','split(','map(','print('],hint:'The PDF explicitly covers reading multiple values in a single line.'} },
    { explain:'Combine selection and iteration. Use break and continue deliberately; the PDF shows continue skipping an iteration and break ending the loop.', code:'for i in range(10):\n    if i % 2 == 0:\n        continue\n    if i > 7:\n        break\n    print(i)', activity:{task:'Print odd numbers but stop before the loop reaches a value greater than 7.',starter:'for i in range(10):\n    # conditions here\n    pass\n',required:['continue','break','print('],hint:'Use continue for even numbers and break for the stopping condition.'} },
    { explain:'The PDF covers indexing, slicing, string operators, membership, searching, counting, replacing, splitting, joining, changing case, and character checks. Intermediate practice should combine several operations in one pipeline.', code:'s = "Python is very very easy"\nwords = s.split()\nprint("-".join(words).upper())\nprint(s.count("very"))', activity:{task:'Split a sentence into words, join them with a separator, change the case, and count a substring.',starter:'s = "Learning Python is very very easy"\n',required:['split(','join(','upper(','count('],hint:'Use split() → join() and call upper() and count().' } },
    { explain:'Use try/except around file operations, because the PDF explicitly combines try, except and open. Robust programs anticipate missing files and keep the error path controlled.', code:'try:\n    with open("notes.txt") as f:\n        print(f.read())\nexcept Exception as e:\n    print("Unable to read file")', activity:{task:'Read a file safely and print a fallback message if an exception occurs.',starter:'try:\n    with open("notes.txt") as f:\n        print(f.read())\nexcept Exception as e:\n    # handle here\n    pass\n',required:['try:','except','open(','read'],hint:'Keep the file read inside try and handle the exception in except.'} },
    { explain:'Intermediate lists are about method composition: append, insert, extend, remove, pop, reverse and sort, plus aliasing/cloning and nested lists.', code:'values = [30, 10, 20]\nvalues.extend([40, 50])\nvalues.sort()\nprint(values)', activity:{task:'Extend a list, sort it, then remove one value and print the result.',starter:'values = [30, 10, 20]\n',required:['extend(','sort(','remove('],hint:'Use at least the three requested list methods.'} },
    { explain:'Tuples become more useful when you unpack them. The PDF includes packing and unpacking, plus useful tuple functions such as len, count, index, sorted, min and max.', code:'record = ("Hello World", 21, "CSE")\nname, age, dept = record\nprint(name, age, dept)', activity:{task:'Pack three values into a tuple and unpack them into three variables.',starter:'record = ("Hello World", 21, "CSE")\n',required:['= record','print('],hint:'Use multiple assignment to unpack the tuple.'} },
    { explain:'The set section focuses on update versus add and on set operations. Intermediate code should use uniqueness intentionally.', code:'a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a | b)\nprint(a & b)\na.update([6, 7])', activity:{task:'Create two sets, show their union and intersection, then update one set with two values.',starter:'a = {1, 2, 3}\nb = {3, 4, 5}\n',required:['|','&','update('],hint:'Use | for union, & for intersection, and update() for multiple iterable values.'} },
    { explain:'Use dictionary methods deliberately. The PDF lists get, pop, popitem, keys, values, items, copy and setdefault in addition to creation, update and delete.', code:'user = {"name":"Hello World"}\nuser.setdefault("role", "student")\nprint(user.get("role"))\nprint(list(user.items()))', activity:{task:'Add a missing key with setdefault(), read it with get(), and inspect items().',starter:'user = {"name":"Hello World"}\n',required:['setdefault(','get(','items('],hint:'Use all three methods in the same solution.'} },
    { explain:'The functions lesson includes positional, keyword, default and variable-length arguments, scope, recursion, anonymous functions and fruitful functions. Intermediate work should show more than one argument style.', code:'def total(*values):\n    return sum(values)\n\nprint(total(10, 20, 30))', activity:{task:'Write a function using variable-length arguments and return the sum.',starter:'def total(*values):\n    # return a value\n',required:['def total','*values','return'],hint:'The PDF describes variable-length parameters with * and tuple-like storage.'} },
    { explain:'The PDF shows that a module can be imported more than once, can be reloaded explicitly, and can be inspected with dir(). Treat a module as a boundary for reusable code.', code:'import math\nprint(dir(math)[:5])', activity:{task:'Import a standard module and use dir() to inspect its members.',starter:'import math\n',required:['import','dir(','math'],hint:'Call dir(math) and print the result.'} },
    { explain:'Intermediate regex work combines character classes, quantifiers, anchors and functions such as fullmatch, search and findall. Focus on patterns that extract useful data.', code:'import re\ntext = "IDs: 120, 305, 991"\nids = re.findall(r"\\d+", text)\nprint(ids)', activity:{task:'Extract every multi-digit number from a string using re.findall().',starter:'import re\ntext = "IDs: 120, 305, 991"\n',required:['findall(','\\d+'],hint:'Use the digit class with a + quantifier.'} }
  ],
  pro: [
    { explain:'Use the PDF as a requirements matrix. Python is presented as a general-purpose language, and the course explicitly lists applications from desktop and web systems to AI, IOT and data science. Design a small data structure that maps a domain to a use case.', code:'applications = {\n    "Data Science": ["analysis", "visualization"],\n    "AI": ["machine learning", "deep learning"]\n}\nfor domain, uses in applications.items():\n    print(domain, "->", ", ".join(uses))', activity:{task:'Create a dictionary of at least two application domains with a list of uses, then iterate through it.',starter:'applications = {}\n',required:['{','for ','items(','print('],hint:'Use a dictionary whose values are lists, then iterate with items().' } },
    { explain:'Treat Python syntax as executable structure: assignment binds a name, keywords have fixed meaning, and indentation defines blocks. Write a compact function-like flow using only constructs from the source.', code:'score = 84\nstatus = "Pass" if score >= 50 else "Fail"\nprint(status)', activity:{task:'Write a two-branch program using a conditional expression and a nested if block without redundant lines.',starter:'score = 84\n',required:[' if ',' else ','if ','print('],hint:'Use the conditional expression once and a normal if block once.'} },
    { explain:'The PDF emphasizes objects, type(), id(), immutable objects and reference variables. Pro-level practice should make object identity and conversion observable.', code:'a = 10\nb = a\nprint(type(a))\nprint(id(a) == id(b))\nb = int("10")\nprint(type(b))', activity:{task:'Show the type and identity relationship of two references, then perform an explicit conversion.',starter:'a = 10\nb = a\n',required:['type(','id(','int('],hint:'The PDF uses id() to compare references and int() for type conversion.'} },
    { explain:'Build a compact expression engine using the operator families named in the syllabus. Keep equality and identity conceptually separate, and demonstrate membership as a different kind of test.', code:'x = 8\ny = 3\nprint(x // y, x % y)\nprint(x > y and x != 0)\nprint("py" in "python")\nprint((x is y))', activity:{task:'Write a short operator demo covering arithmetic, logical, membership and identity.',starter:'x = 8\ny = 3\n',required:['//','%',' and ',' in ',' is '],hint:'Include one example from each requested operator family.'} },
    { explain:'Treat I/O as a data transformation boundary. Read multiple values, convert them, and format the result with sep/end or a formatted string, matching the exact Unit II coverage.', code:'a, b = map(int, input("Enter two numbers: ").split())\nprint("Sum", a + b, sep=": ", end="\\n")', activity:{task:'Read two integers on one line, convert them, and print a formatted result using sep or end.',starter:'a, b = map(int, input().split())\n',required:['map(','split(','sep=','print('],hint:'The syllabus explicitly includes multiple values, sep and end.'} },
    { explain:'The flow-control material includes conditional statements, for/while loops, break, continue, pass and loop else. Build one compact routine that demonstrates deliberate control transfer.', code:'for i in range(10):\n    if i % 2 == 0:\n        continue\n    if i > 7:\n        break\n    print(i)\nelse:\n    print("completed")', activity:{task:'Write a loop that uses continue, break and a loop-else block.',starter:'for i in range(10):\n    pass\n',required:['continue','break','else:','for '],hint:'The PDF has separate sections for continue, break and loops with else.'} },
    { explain:'The strings material is broad. Combine slicing, search, count, replace, split, join, case conversion and character checks into one transformation pipeline.', code:'s = "Learning Python is very very easy"\nclean = s.strip().replace("very ", "")\nwords = clean.split()\nresult = "-".join(words).upper()\nprint(result)\nprint("Python" in s)\nprint(s.count("very"))', activity:{task:'Clean a string, replace part of it, split it, join it, change case and count a substring.',starter:'s = "Learning Python is very very easy"\n',required:['strip(','replace(','split(','join(','upper(','count('],hint:'Use the exact string methods covered in the Unit III material.'} },
    { explain:'The files section is intentionally practical: open files, read lines, search data, handle exceptions, write output and debug. Your activity should model a complete read-process-write cycle.', code:'try:\n    with open("input.txt", "r") as f:\n        for line in f:\n            if "Python" in line:\n                with open("output.txt", "a") as out:\n                    out.write(line)\nexcept Exception as e:\n    print("File error")', activity:{task:'Read a file line by line, find matching lines, and write the matches to an output file safely.',starter:'try:\n    with open("input.txt") as f:\n        for line in f:\n            pass\nexcept Exception as e:\n    pass\n',required:['with open(','for line in','in line','write(','except'],hint:'Use a match condition, then write matching lines to another file.'} },
    { explain:'Pro list work combines nested data, mutation methods, cloning and comprehensions. Prefer clear transformations over long imperative loops when a comprehension expresses the same operation.', code:'matrix = [[1,2],[3,4]]\nflat = [value * value for row in matrix for value in row]\nclone = matrix.copy()\nprint(flat)', activity:{task:'Create a nested list and produce a flattened list of squared values using a list comprehension.',starter:'matrix = [[1,2],[3,4]]\n',required:['for row in','for value in','[','value * value'],hint:'A nested comprehension has one for for rows and another for values.'} },
    { explain:'Use tuple packing/unpacking as a stable data contract. Combine unpacking with useful tuple functions rather than converting to lists unnecessarily.', code:'record = ("Hello World", 21, "CSE")\nname, *details = record\nprint(name, min((10, 20, 30)), max((10,20,30)))', activity:{task:'Pack a tuple, unpack it with starred assignment, and use min/max on a tuple.',starter:'record = ("Hello World", 21, "CSE")\n',required:['*details','min(','max('],hint:'Keep the tuple immutable and demonstrate starred unpacking.'} },
    { explain:'The set section is ideal for data-cleaning logic: uniqueness, membership and mathematical set operations. Combine update(), intersection and difference in one solution.', code:'a = {1,2,3,4}\nb = {3,4,5,6}\na.update([7,8])\nprint(a & b)\nprint(a - b)\nprint(a ^ b)', activity:{task:'Update a set, then calculate intersection, difference and symmetric difference.',starter:'a = {1,2,3,4}\nb = {3,4,5,6}\n',required:['update(','&','-','^'],hint:'The PDF covers mathematical operators for set objects.'} },
    { explain:'A dictionary can be treated as a structured record or lookup table. Use get(), setdefault(), items() and popitem() to show controlled access and mutation.', code:'data = {"name":"Hello World", "role":"student"}\ndata.setdefault("level", "pro")\nfor key, value in data.items():\n    print(key, value)\nremoved = data.popitem()\nprint(removed)', activity:{task:'Build a dictionary, add a default key, iterate through items and remove one entry with popitem().',starter:'data = {"name":"Hello World"}\n',required:['setdefault(','items(','popitem(','for '],hint:'Use all three dictionary methods in one coherent flow.'} },
    { explain:'The functions material covers argument kinds, scope, recursion, anonymous functions, map/filter and nested functions. Write a reusable function that composes more than one of these ideas.', code:'def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))', activity:{task:'Implement a recursive factorial function and return the result.',starter:'def factorial(n):\n    # recursive case here\n',required:['def factorial','return','factorial('],hint:'Use a base case and one recursive call.'} },
    { explain:'The module material shows reuse, reload and dir(). Pro-level work should also separate responsibilities into a module-shaped boundary instead of placing everything in one file.', code:'import math\nfrom math import sqrt\nimport importlib\nprint(dir(math)[:5])\nprint(sqrt(81))', activity:{task:'Write a snippet demonstrating import, from-import and dir() against a standard library module.',starter:'import math\n',required:['import math','from math import','dir('],hint:'Use both import styles shown in the course material.'} },
    { explain:'The regex material goes from character classes and quantifiers to extraction and the full re API. Pro-level practice should validate a structured value and then extract matching data.', code:'import re\ntext = "IDs: 120, 305, 991"\nif re.fullmatch(r"[0-9]+", "305"):\n    print("valid")\nprint(re.findall(r"\\d+", text))', activity:{task:'Validate a numeric string with fullmatch() and extract all numbers from another string with findall().',starter:'import re\ntext = "IDs: 120, 305, 991"\n',required:['fullmatch(','findall(','\\d+'],hint:'Use one regex for validation and one for extraction.'} }
  ]
};


const specializedTopic = (
  id: string,
  unit: string,
  title: string,
  subtitle: string,
  syllabus: string,
  sourceText: string,
  coverage: string[],
  levelExplanation: string,
  code: string,
  task: string,
  starter: string,
  required: string[],
  hint: string,
  preview?: string,
): Topic => ({
  id,
  unit,
  number: '00',
  title,
  subtitle,
  syllabus,
  sourceLabel: 'PDF • Advanced Python Course Material',
  sourceText,
  coverage,
  levelExplanation,
  code,
  activity: { task, starter, required, hint, ...(preview ? { preview } : {}) },
});

// Intermediate is intentionally a dedicated data-structures path. It avoids repeating
// the beginner's syntax-first topics and moves directly into algorithms and structures.
const intermediateTopics: Topic[] = [
  specializedTopic('intermediate-1','DS I','Data Structures & Big-O','Complexity • Trade-offs • Memory • Operations',
    'Data structures, algorithmic notation and operation costs.',
    'Choose a structure by the operations you need. The supplied Python material includes algorithmic notation and performance-oriented chapters; this path turns that foundation into practical data-structure reasoning.',
    ['Big-O notation','time complexity','space complexity','operation cost','trade-offs'],
    'Start thinking in terms of operations rather than syntax. Before implementing a structure, identify its access, insertion, deletion and search costs.',
    'n = 1000\nprint("linear scan:", n)\nprint("binary search:", "log2(n)")',
    'Write a short note in code comments identifying the expected time complexity of a linear search and binary search.',
    '# linear search: O(?)\n# binary search: O(?)\n', ['O(n)','O(log n)'], 'Use the standard complexity notation in comments.'),
  specializedTopic('intermediate-2','DS II','Linked Lists','Nodes • Pointers • Traversal • Insert • Delete',
    'Linked-list nodes and traversal.',
    'The supplied Python reference includes a linked-list chapter and a Linked List Node chapter. A linked list stores values through nodes connected by references rather than contiguous indexing.',
    ['Node','head','next','traversal','insertion','deletion'],
    'Model a linked list as a chain of nodes. The important idea is the relationship between a node and the next node.',
    'class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\nhead = Node(10)\nhead.next = Node(20)',
    'Create two linked-list nodes, connect them, and print the second value by following next.',
    'class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\nhead = Node(10)\n', ['class Node','self.next','Node(20)'], 'Create a second node and link it with head.next.'),
  specializedTopic('intermediate-3','DS II','Stack','LIFO • Push • Pop • Peek • Applications',
    'Stack data structure and LIFO operations.',
    'Use a Python list as a stack: append() pushes an item and pop() removes the most recent item. This is a direct bridge from the beginner list topic to a real abstract data type.',
    ['LIFO','push','pop','peek','stack'],
    'A stack is defined by its access discipline: last in, first out. Focus on the interface, not the underlying container.',
    'stack = []\nstack.append("A")\nstack.append("B")\nprint(stack.pop())\nprint(stack[-1])',
    'Implement push and pop behavior with a Python list and show the remaining top element.',
    'stack = []\n# push two items\n', ['append(','pop(','stack[-1]'], 'Append two values, pop one, then inspect the top.'),
  specializedTopic('intermediate-4','DS II','Queue & Deque','FIFO • Enqueue • Dequeue • collections.deque',
    'Queues and double-ended queues.',
    'The supplied reference contains Queue and Deque chapters, including breadth-first search. collections.deque provides efficient operations at both ends.',
    ['FIFO','enqueue','dequeue','deque','popleft','append'],
    'A queue reverses the access rule of a stack: first in, first out. deque is useful when both ends must be modified.',
    'from collections import deque\nq = deque([1, 2])\nq.append(3)\nprint(q.popleft())',
    'Create a deque, enqueue a value, then dequeue the oldest value with popleft().',
    'from collections import deque\nq = deque([1, 2])\n', ['deque(','append(','popleft('], 'Use deque and popleft instead of removing index zero from a list.'),
  specializedTopic('intermediate-5','DS III','Heap & Priority Queue','heapq • Min-Heap • Push • Pop',
    'Heap-based priority queues using heapq.',
    'The supplied reference includes heapq and explains smallest and largest items. Python’s heapq module maintains a min-heap where the smallest element is available at index zero.',
    ['heap','min-heap','heapq','heappush','heappop','priority queue'],
    'A heap is not a fully sorted list. Its value comes from maintaining a useful priority property efficiently.',
    'import heapq\nh = []\nheapq.heappush(h, 30)\nheapq.heappush(h, 10)\nheapq.heappush(h, 20)\nprint(heapq.heappop(h))',
    'Build a min-heap with three values and remove the smallest value.',
    'import heapq\nh = []\n', ['heappush(','heappop('], 'Push several values before popping the smallest.'),
  specializedTopic('intermediate-6','DS III','Hash Tables','Hashing • Key Lookup • Collision Concepts',
    'Hash-table reasoning and dictionary lookup.',
    'Python dictionaries provide hash-table-style key lookup. The reference material also covers dictionaries, hashing-related concepts and common pitfalls; here the focus is on the data-structure abstraction.',
    ['hash table','hash','key','value','average lookup','collision'],
    'Think of a dictionary as a mapping structure optimized for key-based lookup. The key, not the position, determines access.',
    'table = {"id-101": "Mithun", "id-102": "Alex"}\nprint(table["id-101"])',
    'Create a key-value table and retrieve one record by key; add a comment explaining why key lookup differs from list indexing.',
    'table = {"id-101": "Mithun"}\n', ['table[','key','lookup'], 'Use a dictionary lookup and include a comment containing the word lookup.'),
  specializedTopic('intermediate-7','DS III','Binary Search','Sorted Data • Divide & Conquer • O(log n)',
    'Searching sorted sequences with binary search.',
    'The supplied reference has a dedicated Searching chapter, including bisect operations. Binary search repeatedly halves the remaining search interval.',
    ['binary search','sorted','mid','low','high','O(log n)'],
    'Binary search is only valid when the ordering invariant is maintained. Each comparison removes roughly half of the remaining candidates.',
    'def binary_search(a, target):\n    lo, hi = 0, len(a) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if a[mid] == target: return mid\n        if a[mid] < target: lo = mid + 1\n        else: hi = mid - 1\n    return -1',
    'Implement binary search over a sorted list and return the target index or -1.',
    'def binary_search(a, target):\n    lo, hi = 0, len(a) - 1\n', ['while lo <= hi','mid =','return -1'], 'Compare the middle element and discard one half each iteration.'),
  specializedTopic('intermediate-8','DS III','Sorting Algorithms','Bubble • Insertion • Selection • Built-ins',
    'Ordering data and comparing sorting strategies.',
    'The supplied reference includes a Sorting, Minimum and Maximum chapter. Learn the algorithmic idea first, then use Python’s sorted() when the goal is production code.',
    ['bubble sort','insertion sort','selection sort','sorted()','key'],
    'Sorting is a recurring primitive. Understand at least one quadratic algorithm before relying on optimized built-ins.',
    'values = [5, 2, 4, 1]\nfor i in range(len(values)):\n    for j in range(0, len(values)-i-1):\n        if values[j] > values[j+1]:\n            values[j], values[j+1] = values[j+1], values[j]\nprint(values)',
    'Implement a simple bubble sort using nested loops and an adjacent swap.',
    'values = [5, 2, 4, 1]\n', ['for i in range','for j in range','values[j], values[j+1]'], 'Compare adjacent elements and swap them when they are out of order.'),
  specializedTopic('DS-9','DS IV','Trees & Binary Trees','Root • Child • Leaf • Traversal',
    'Tree structures and depth-first traversal.',
    'Trees extend the node-and-reference idea from linked lists. A binary tree node can have up to two children, making recursive traversal natural.',
    ['tree','root','child','leaf','binary tree','traversal'],
    'Trees represent hierarchical data. Traversal order becomes the central algorithmic concept: preorder, inorder and postorder.',
    'class Node:\n    def __init__(self, value):\n        self.value = value\n        self.left = None\n        self.right = None\n\nroot = Node(10)',
    'Create a binary-tree node with left and right children and print the root value.',
    'class Node:\n    def __init__(self, value):\n        self.value = value\n        self.left = None\n        self.right = None\n', ['self.left','self.right','root = Node'], 'Attach one left and one right child to a root.'),
  specializedTopic('DS-10','DS IV','Binary Search Trees','Ordering Invariant • Insert • Search',
    'Binary search tree ordering and operations.',
    'A binary search tree combines tree structure with the binary-search ordering rule: values smaller than a node go left and larger values go right.',
    ['BST','ordering invariant','insert','search','left','right'],
    'The BST invariant is the entire point of the structure. Preserve it during insertion so search can eliminate a subtree at each step.',
    'class BST:\n    def __init__(self):\n        self.root = None\n\n# insert values while preserving: left < node < right',
    'Write an insert routine that preserves the BST ordering invariant.',
    'class BST:\n    def __init__(self):\n        self.root = None\n\n    def insert(self, value):\n        pass\n', ['def insert','self.root','left','right'], 'Compare the new value with the current node and descend left or right.'),
  specializedTopic('DS-11','DS V','Graphs','Vertices • Edges • Adjacency List',
    'Graph representation with adjacency lists.',
    'Represent a graph as a dictionary from each vertex to its neighboring vertices. This structure is the foundation for traversal algorithms such as BFS and DFS.',
    ['graph','vertex','edge','adjacency list','neighbor'],
    'Graphs model relationships rather than a single hierarchy. An adjacency list is compact for sparse graphs.',
    'graph = {\n    "A": ["B", "C"],\n    "B": ["A", "D"],\n    "C": ["A"]\n}\nprint(graph["A"])',
    'Create an adjacency-list graph and print the neighbors of one vertex.',
    'graph = {"A": ["B", "C"]}\n', ['graph =','["B", "C"]','graph['], 'Use a dictionary whose values are neighbor lists.'),
  specializedTopic('DS-12','DS V','BFS & DFS','Traversal • Queue • Stack/Recursion • Visited',
    'Breadth-first and depth-first graph traversal.',
    'The supplied reference explicitly includes breadth-first search in the Deque material and recursion chapters. BFS uses a queue; DFS can use recursion or a stack.',
    ['BFS','DFS','visited','queue','stack','recursion'],
    'Traversal is about visiting each reachable vertex once. The data structure used to choose the next vertex changes the traversal order.',
    'from collections import deque\nqueue = deque(["A"])\nvisited = {"A"}\nwhile queue:\n    node = queue.popleft()\n    print(node)',
    'Implement the core BFS loop with a deque and a visited set.',
    'from collections import deque\nqueue = deque(["A"])\nvisited = {"A"}\n', ['popleft(','visited','while queue'], 'Pop from the left of the queue and mark newly discovered nodes visited.'),
  specializedTopic('DS-13','DS V','Recursion & Backtracking','Base Case • Call Stack • State Search',
    'Recursive problem solving and backtracking.',
    'The supplied reference has a dedicated Recursion chapter covering recursive functions, tree exploration and recursion depth. Backtracking extends recursion by exploring and undoing candidate choices.',
    ['recursion','base case','call stack','backtracking','state'],
    'A recursive algorithm needs a base case and a smaller subproblem. Backtracking additionally restores state before trying the next choice.',
    'def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)',
    'Write a recursive factorial with a clear base case and recursive case.',
    'def factorial(n):\n    if n <= 1:\n        return 1\n', ['factorial(','return n * factorial'], 'Return immediately for the base case, otherwise recurse on n - 1.'),
  specializedTopic('DS-14','DS VI','Trie & Prefix Search','Characters • Prefix • Search',
    'Prefix trees for string lookup.',
    'A trie is a specialized tree for strings. It is useful when many searches depend on prefixes, such as autocomplete.',
    ['trie','prefix','children','terminal','autocomplete'],
    'Unlike a hash table, a trie exposes the structure of the key itself. Shared prefixes can therefore share nodes.',
    'class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.terminal = False',
    'Create a trie node with a children mapping and a terminal marker.',
    'class TrieNode:\n    def __init__(self):\n        self.children = {}\n', ['children = {}','terminal = False'], 'Add the terminal flag to distinguish complete words from prefixes.'),
  specializedTopic('DS-15','DS VI','Data Structures Project','Choose • Implement • Test • Compare',
    'Designing a small data-structure solution.',
    'Combine the structures covered in this path into one practical problem. Compare the data structure choice with the operations your application needs.',
    ['requirements','structure choice','complexity','tests','trade-off'],
    'The final checkpoint is about engineering judgment: choose a structure because of its operations and constraints, then test the invariant that makes it correct.',
    'from collections import deque\n\nclass TaskQueue:\n    def __init__(self):\n        self.items = deque()\n\n    def add(self, task):\n        self.items.append(task)',
    'Build a small TaskQueue using deque with add() and remove_next() operations.',
    'from collections import deque\n\nclass TaskQueue:\n    def __init__(self):\n        self.items = deque()\n\n    def add(self, task):\n        self.items.append(task)\n\n    def remove_next(self):\n        # remove next task\n', ['class TaskQueue','deque(','append(','popleft('], 'Use deque so the next task can be removed efficiently from the left.')
];

// Pro is intentionally a professional Python engineering path. It assumes the
// beginner and intermediate material is already understood and avoids repeating it.
const proTopics: Topic[] = [
  specializedTopic('pro-1','PRO I','Object-Oriented Python','Classes • Objects • Inheritance • Composition',
    'Classes, instance/class variables, inheritance and composition.',
    'The supplied reference has an extensive Classes chapter covering class methods, inheritance, multiple inheritance, properties, composition and class/instance variables.',
    ['class','object','inheritance','composition','property','classmethod'],
    'Professional Python often models behavior through objects. Choose composition or inheritance based on the relationship you need to represent.',
    'class Account:\n    def __init__(self, owner):\n        self.owner = owner\n\n    def describe(self):\n        return f"Account({self.owner})"',
    'Create a class with state and a method that returns a formatted description.',
    'class Account:\n    def __init__(self, owner):\n        self.owner = owner\n\n    def describe(self):\n        pass\n', ['class Account','self.owner','def describe'], 'Store state on self and return a useful string from the method.'),
  specializedTopic('pro-2','PRO I','Magic & Dunder Methods','__str__ • __repr__ • Operator Overloading',
    'Special methods and Python data-model protocols.',
    'The reference includes string representations, operator overloading and magic/dunder methods. These protocols let custom classes behave naturally with Python syntax and built-ins.',
    ['__str__','__repr__','__len__','__eq__','dunder','operator overloading'],
    'Dunder methods are interfaces to Python’s data model. Implement only the protocols your class actually needs.',
    'class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n\n    def __repr__(self):\n        return f"Point({self.x}, {self.y})"',
    'Implement __repr__ for a small value object.',
    'class Point:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n\n    def __repr__(self):\n        return f"Point({self.x}, {self.y})"\n', ['__repr__','return f"Point'], 'Return a concise representation that includes both coordinates.'),
  specializedTopic('pro-3','PRO II','Decorators','Higher-Order Functions • Wrappers • Metadata',
    'Function decorators and decorator factories.',
    'The supplied reference has a dedicated Decorators chapter covering decorator functions, decorator classes, arguments and preserving metadata.',
    ['decorator','wrapper','@','functools.wraps','factory'],
    'A decorator transforms callable behavior without changing the caller’s syntax. Keep wrappers small and preserve metadata with functools.wraps.',
    'from functools import wraps\n\ndef log_call(fn):\n    @wraps(fn)\n    def wrapper(*args, **kwargs):\n        print("calling", fn.__name__)\n        return fn(*args, **kwargs)\n    return wrapper',
    'Write a decorator that logs a function name before calling it.',
    'from functools import wraps\n\ndef log_call(fn):\n    @wraps(fn)\n    def wrapper(*args, **kwargs):\n        print(fn.__name__)\n        return fn(*args, **kwargs)\n    return wrapper\n', ['@wraps','def wrapper','return fn(*args'], 'Wrap the original function, log its name, then return its result.'),
  specializedTopic('pro-4','PRO II','Iterators & Generators','__iter__ • __next__ • yield • Lazy Evaluation',
    'Iterator protocols and generator functions.',
    'The reference contains a large Generators chapter plus an Iterables and Iterators chapter. Generators produce values lazily with yield and can model streams without building the entire result in memory.',
    ['iterable','iterator','__iter__','__next__','yield','lazy'],
    'Iterators separate producing the next value from storing all values. Generators are usually the simplest way to implement that pattern.',
    'def squares(n):\n    for i in range(n):\n        yield i * i\n\nfor value in squares(5):\n    print(value)',
    'Create a generator that yields squares from 0 through n-1.',
    'def squares(n):\n    for i in range(n):\n        yield i * i\n', ['yield','for i in range'], 'Use yield instead of building a list of all squares first.'),
  specializedTopic('pro-5','PRO II','Context Managers','with • __enter__ • __exit__ • Resource Safety',
    'Resource management with context managers.',
    'The reference has a Context Managers chapter covering with, custom context managers and generator-based context managers.',
    ['context manager','with','__enter__','__exit__','resource safety'],
    'Context managers make cleanup deterministic. The with statement expresses the lifecycle boundary directly in the code.',
    'class Timer:\n    def __enter__(self):\n        print("start")\n        return self\n    def __exit__(self, exc_type, exc, tb):\n        print("stop")',
    'Create a context manager with __enter__ and __exit__ that prints start and stop.',
    'class Timer:\n    def __enter__(self):\n        print("start")\n        return self\n\n    def __exit__(self, exc_type, exc, tb):\n        print("stop")\n', ['__enter__','__exit__','with Timer'], 'Add a with Timer block after defining the two lifecycle methods.'),
  specializedTopic('pro-6','PRO III','Exception Architecture','Hierarchy • Custom Exceptions • Chaining • finally',
    'Robust exception handling and custom error types.',
    'The reference covers exception hierarchy, multiple exceptions, raising exceptions, custom exception types, finally and exception chaining.',
    ['Exception','custom exception','raise','finally','from','exception chaining'],
    'Catch exceptions at the boundary where you can recover or add context. Use custom exceptions to communicate domain-specific failures.',
    'class ValidationError(Exception):\n    pass\n\ndef validate(age):\n    if age < 0:\n        raise ValidationError("age must be non-negative")',
    'Define and raise a custom ValidationError for invalid input.',
    'class ValidationError(Exception):\n    pass\n\ndef validate(age):\n    if age < 0:\n        raise ValidationError("invalid age")\n', ['class ValidationError','raise ValidationError','Exception'], 'Subclass Exception and raise the custom type when the invariant is broken.'),
  specializedTopic('pro-7','PRO III','Type Hints & Generics','Annotations • Generic Types • Protocol Thinking',
    'Type hints for functions, variables and reusable components.',
    'The reference includes a Type Hints chapter covering function annotations, NamedTuple, generic types, variables, attributes and keyword arguments.',
    ['type hints','annotations','Generic','NamedTuple','return type'],
    'Type hints document interfaces and enable static analysis without changing Python’s dynamic runtime model.',
    'def first(values: list[int]) -> int:\n    return values[0]\n\nprint(first([10, 20, 30]))',
    'Annotate a function that accepts a list of integers and returns an integer.',
    'def first(values: list[int]) -> int:\n    return values[0]\n', ['list[int]','-> int'], 'Annotate both the parameter and return type.'),
  specializedTopic('pro-8','PRO III','Modules & Packages','Imports • Packages • __all__ • PyPI',
    'Professional module and package organization.',
    'The reference covers modules, packages, importing, __all__, arbitrary import locations, package creation, PyPI and setup.py.',
    ['module','package','__init__','__all__','import','PyPI'],
    'Package boundaries reduce coupling and make code reusable. Keep import direction predictable and expose a deliberate public API.',
    '# package structure\n# myapp/\n#   __init__.py\n#   models.py\n#   services.py\n\nfrom myapp.services import run',
    'Sketch a package structure and import one public function from a submodule.',
    '# myapp/__init__.py\n# myapp/services.py\ndef run():\n    pass\n\nfrom myapp.services import run\n', ['__init__.py','from myapp.services import run'], 'Use a package directory with __init__.py and a public service function.'),
  specializedTopic('pro-9','PRO IV','Testing & Mocking','unittest • pytest • Fixtures • Mocking',
    'Unit tests, assertions, fixtures and mocks.',
    'The reference contains Unit Testing and py.test chapters covering setup/teardown, assertions, exceptions, pytest fixtures and unittest.mock.',
    ['unit test','assert','pytest','fixture','mock','test isolation'],
    'Tests should make behavior executable and repeatable. Isolate external dependencies with mocks rather than making unit tests depend on services.',
    'def add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5',
    'Write a unit test that asserts a function returns the expected value.',
    'def add(a, b):\n    return a + b\n\ndef test_add():\n    # assertion here\n', ['def test_add','assert','add(2, 3)'], 'Use an assert statement inside a test function.'),
  specializedTopic('pro-10','PRO IV','Profiling & Performance','cProfile • timeit • Complexity • Optimization',
    'Measure before optimizing Python code.',
    'The reference includes Profiling, Python speed of program and Performance optimization chapters, including cProfile, timeit and algorithmic notation.',
    ['profiling','cProfile','timeit','benchmark','optimization'],
    'Performance work starts with measurement. Identify the hot path, benchmark it, change one thing, then measure again.',
    'import timeit\nresult = timeit.timeit("sum(range(1000))", number=1000)\nprint(result)',
    'Use timeit to benchmark a small Python expression.',
    'import timeit\nresult = timeit.timeit("sum(range(1000))", number=1000)\n', ['timeit.timeit','number='], 'Benchmark the same expression repeatedly and print the measured time.'),
  specializedTopic('pro-11','PRO V','Concurrency & Parallelism','threading • multiprocessing • GIL • Shared State',
    'Threads, processes and the Python concurrency model.',
    'The reference includes multiprocessing, multithreading, processes and threads, the Global Interpreter Lock, sharing state and parallel computation.',
    ['threading','multiprocessing','GIL','process','thread','worker pool'],
    'Choose concurrency based on the workload and coordination cost. Threads are useful for many I/O-bound tasks; processes can bypass the GIL for CPU-bound work.',
    'from concurrent.futures import ThreadPoolExecutor\n\ndef work(x):\n    return x * x\n\nwith ThreadPoolExecutor(max_workers=2) as ex:\n    print(list(ex.map(work, [1,2,3,4])))',
    'Run a small CPU-light mapping task with a thread pool.',
    'from concurrent.futures import ThreadPoolExecutor\n\ndef work(x):\n    return x * x\n', ['ThreadPoolExecutor','ex.map'], 'Create the executor with a with block and map the worker over values.'),
  specializedTopic('PRO-12','PRO V','Asyncio','Coroutine • await • Event Loop • Async I/O',
    'Asynchronous programming with asyncio.',
    'The reference includes an Asyncio chapter covering coroutine syntax, asynchronous executors, synchronization primitives and WebSockets.',
    ['asyncio','async def','await','coroutine','event loop','gather'],
    'Asyncio is cooperative concurrency. A coroutine yields control at await points so other tasks can make progress.',
    'import asyncio\n\nasync def main():\n    await asyncio.sleep(0)\n    return "done"\n\nprint(asyncio.run(main()))',
    'Define and run an async coroutine using asyncio.run().',
    'import asyncio\n\nasync def main():\n    await asyncio.sleep(0)\n    return "done"\n', ['async def','await','asyncio.run'], 'The coroutine must contain await and be executed with asyncio.run().' ),
  specializedTopic('PRO-13','PRO VI','Databases & Persistence','SQLite • Transactions • Serialization • SQL',
    'Database access and persistent data.',
    'The reference includes sqlite3, database access, PostgreSQL, MySQL and persistence/serialization chapters. SQLite is a useful zero-server starting point for application storage.',
    ['sqlite3','connection','cursor','execute','commit','transaction'],
    'Persistence requires explicit boundaries: connect, execute parameterized statements, commit when appropriate, and close resources safely.',
    'import sqlite3\n\nwith sqlite3.connect("app.db") as con:\n    con.execute("create table if not exists users (id integer, name text)")\n    con.execute("insert into users values (?, ?)", (1, "Mithun"))\n    con.commit()',
    'Create a SQLite table and insert one parameterized row safely.',
    'import sqlite3\n\nwith sqlite3.connect("app.db") as con:\n    con.execute("create table if not exists users (id integer, name text)")\n    # parameterized insert\n', ['sqlite3.connect','execute(','?','commit()'], 'Use a parameter placeholder instead of string concatenation.'),
  specializedTopic('PRO-14','PRO VI','Networking & Web Services','HTTP • Sockets • Flask • WebSockets',
    'Network programming and service boundaries.',
    'The reference includes sockets, WebSockets, Python networking, HTTP servers, Flask, urllib and requests-related material.',
    ['HTTP','socket','TCP','UDP','Flask','WebSocket','request'],
    'A service is a contract over a network. Keep transport concerns separate from application logic and validate external input at the boundary.',
    'from flask import Flask\napp = Flask(__name__)\n\n@app.get("/health")\ndef health():\n    return {"status": "ok"}',
    'Create a minimal Flask health endpoint returning a JSON-like dictionary.',
    'from flask import Flask\napp = Flask(__name__)\n\n@app.get("/health")\ndef health():\n    return {"status": "ok"}\n', ['Flask','@app.get','/health'], 'Use a route decorator and return a small status object.'),
  specializedTopic('PRO-15','PRO VI','Security & Production Engineering','Hashing • Secrets • Validation • Deployment',
    'Secure Python application practices.',
    'The reference includes security and cryptography, secure password hashing, message digests, RSA, anti-patterns, common pitfalls and deployment topics.',
    ['hashing','password hashing','secrets','input validation','least privilege','deployment'],
    'Production Python requires more than correct syntax: validate untrusted input, avoid leaking secrets, use appropriate password hashing and understand deployment boundaries.',
    'import hashlib\n\nvalue = "example"\ndigest = hashlib.sha256(value.encode()).hexdigest()\nprint(digest)',
    'Hash a value with SHA-256 and add a comment explaining that password storage should use a dedicated password-hashing scheme.',
    'import hashlib\nvalue = "example"\n', ['hashlib.sha256','hexdigest','password'], 'Use SHA-256 for the demonstration, and mention password hashing in a comment.'),
];

const buildTopics = (level: Level, source: Topic[], details: boolean = false): Topic[] => source.map((topic, i) => ({
  ...topic,
  id: topic.id || `${level}-${i + 1}`,
  number: String(i + 1).padStart(2, '0'),
}));

export const topicsByLevel: Record<Level, Topic[]> = {
  beginner: baseTopics.map((t, i) => ({...t, id:`beginner-${i+1}`, number:String(i+1).padStart(2,'0'), levelExplanation:levelDetails.beginner[i].explain, code:levelDetails.beginner[i].code, activity:levelDetails.beginner[i].activity})),
  intermediate: buildTopics('intermediate', intermediateTopics),
  pro: buildTopics('pro', proTopics),
};
