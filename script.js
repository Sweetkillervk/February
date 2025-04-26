const quizData = [
  {
    question: "What is the default file extension for a Word document?",
    a: ".docx",
    b: ".txt",
    c: ".pdf",
    d: ".xlsx",
    correct: "a"
  },
  {
    question: "Which shortcut is used to apply bold formatting?",
    a: "Ctrl+I",
    b: "Ctrl+B",
    c: "Ctrl+U",
    d: "Ctrl+D",
    correct: "b"
  },
  {
    question: "What feature merges a document with a data source for bulk letters?",
    a: "Track Changes",
    b: "Mail Merge",
    c: "Hyperlink",
    d: "Table of Contents",
    correct: "b"
  },
  {
    question: "Which tab contains the 'Styles' options?",
    a: "Insert",
    b: "Review",
    c: "Home",
    d: "View",
    correct: "c"
  },
  {
    question: "What changes a page from portrait to landscape orientation?",
    a: "Page Layout → Orientation",
    b: "Design → Themes",
    c: "Insert → Page Break",
    d: "View → Zoom",
    correct: "a"
  },
  {
    question: "Which tool checks synonyms for a selected word?",
    a: "Spell Check",
    b: "Thesaurus",
    c: "Word Count",
    d: "Grammar Check",
    correct: "b"
  },
  {
    question: "What is the default view when opening Word?",
    a: "Read Mode",
    b: "Print Layout",
    c: "Web Layout",
    d: "Outline",
    correct: "b"
  },
  {
    question: "Which option adjusts space around the edges of a page?",
    a: "Indentation",
    b: "Margins",
    c: "Alignment",
    d: "Line Spacing",
    correct: "b"
  },
  {
    question: "Where would you add a page number?",
    a: "Header/Footer",
    b: "References",
    c: "Insert → Picture",
    d: "Review → Comments",
    correct: "a"
  },
  {
    question: "What feature adds a faint image behind text (e.g., 'Draft')?",
    a: "Page Border",
    b: "Watermark",
    c: "Text Effect",
    d: "Shading",
    correct: "b"
  },

  // MS Excel Questions
  {
    question: "Which symbol starts all Excel formulas?",
    a: "=",
    b: "#",
    c: "$",
    d: "/",
    correct: "a"
  },
  {
    question: "What does the SUM function do?",
    a: "Multiplies numbers",
    b: "Adds numbers",
    c: "Averages numbers",
    d: "Rounds numbers",
    correct: "b"
  },
  {
    question: "What is an absolute cell reference?",
    a: "A1",
    b: "$A$1",
    c: "A$1",
    d: "$A1",
    correct: "b"
  },
  {
    question: "Which function searches for a value in the first column of a table?",
    a: "SUMIF",
    b: "VLOOKUP",
    c: "INDEX",
    d: "COUNT",
    correct: "b"
  },
  {
    question: "What chart type is best for trends over time?",
    a: "Pie Chart",
    b: "Bar Chart",
    c: "Line Chart",
    d: "Scatter Plot",
    correct: "c"
  },
  {
    question: "Which feature keeps rows/columns visible while scrolling?",
    a: "Filter",
    b: "Freeze Panes",
    c: "Split",
    d: "Group",
    correct: "b"
  },
  {
    question: "What combines text from multiple cells into one?",
    a: "CONCATENATE",
    b: "SUM",
    c: "SPLIT",
    d: "MERGE",
    correct: "a"
  },
  {
    question: "Which tool summarizes data interactively?",
    a: "Pivot Table",
    b: "Data Validation",
    c: "Conditional Formatting",
    d: "Goal Seek",
    correct: "a"
  },
  {
    question: "What does the formula =A1&B1 do?",
    a: "Adds A1 and B1",
    b: "Multiplies A1 and B1",
    c: "Joins text from A1 and B1",
    d: "Subtracts B1 from A1",
    correct: "c"
  },
  {
    question: "Which option restricts data entry to specific values?",
    a: "Data Validation",
    b: "Sort & Filter",
    c: "Remove Duplicates",
    d: "Text to Columns",
    correct: "a"
  },

  // MS PowerPoint Questions
  {
    question: "What is the default file extension for PowerPoint?",
    a: ".pptx",
    b: ".docx",
    c: ".xlsx",
    d: ".ppt",
    correct: "a"
  },
  {
    question: "Which shortcut creates a new slide?",
    a: "Ctrl+M",
    b: "Ctrl+N",
    c: "Ctrl+S",
    d: "Ctrl+P",
    correct: "a"
  },
  {
    question: "What adds motion between slides?",
    a: "Animation",
    b: "Transition",
    c: "Design Theme",
    d: "Hyperlink",
    correct: "b"
  },
  {
    question: "Which view edits the master layout for all slides?",
    a: "Slide Sorter",
    b: "Notes Page",
    c: "Slide Master",
    d: "Reading View",
    correct: "c"
  },
  {
    question: "What key starts a slideshow from the beginning?",
    a: "F5",
    b: "F7",
    c: "F12",
    d: "Esc",
    correct: "a"
  },
  {
    question: "Which tool adds entrance effects to objects?",
    a: "Transition",
    b: "Animation",
    c: "Design Ideas",
    d: "Slide Show",
    correct: "b"
  },
  {
    question: "Where do you add speaker notes?",
    a: "Slide Master",
    b: "Notes Pane",
    c: "Header/Footer",
    d: "Comments",
    correct: "b"
  },
  {
    question: "What is the shortcut to start a slideshow from the current slide?",
    a: "F5",
    b: "Shift+F5",
    c: "Ctrl+F5",
    d: "Alt+F5",
    correct: "b"
  },
  {
    question: "Which format exports a presentation as a video?",
    a: ".mp4",
    b: ".pdf",
    c: ".gif",
    d: ".jpg",
    correct: "a"
  },
  {
    question: "What does 'Ctrl+D' do in PowerPoint?",
    a: "Duplicate a slide",
    b: "Delete a slide",
    c: "Insert a table",
    d: "Save the file",
    correct: "a"
  }

  
    
  
];

// DOM Elements
const loginForm = document.getElementById('loginForm');
const quizSection = document.getElementById('quizSection');
const marksheet = document.getElementById('marksheet');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const studentName = document.getElementById('studentName');
const studentEmail = document.getElementById('studentEmail');
const learnerCode = document.getElementById('learnerCode');
const timerElement = document.getElementById('timer');
const resetButton = document.getElementById('resetButton');
const marksheetName = document.getElementById('marksheetName');
const marksheetEmail = document.getElementById('marksheetEmail');
const marksheetCode = document.getElementById('marksheetCode');
const marksheetScore = document.getElementById('marksheetScore');
const studentTableBody = document.getElementById('studentTableBody');

let currentQuiz = 0;
let score = 0;
let shuffledQuizData = [];
let timeLeft = 20;
let timerInterval;

// Shuffle function
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Handle Login and Store Data
function handleLogin() {
  const name = studentName.value.trim();
  const email = studentEmail.value.trim();
  const learnerCodeValue = learnerCode.value.trim();

  if (name && email && learnerCodeValue) {
    // Store user data in sessionStorage
    sessionStorage.setItem('studentName', name);
    sessionStorage.setItem('studentEmail', email);
    sessionStorage.setItem('learnerCode', learnerCodeValue);

    // Hide login and show quiz section
    loginForm.style.display = 'none';
    quizSection.style.display = 'block';

    // Set marksheet fields
    marksheetName.value = name;
    marksheetEmail.value = email;
    marksheetCode.value = learnerCodeValue;

    // Shuffle quiz data and load quiz
    shuffledQuizData = shuffle([...quizData]);
    loadQuiz();
  } else {
    alert("कृपया सभी फ़ील्ड्स भरें।");
  }
}

// Load Quiz Data
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = shuffledQuizData[currentQuiz];
  questionEl.innerText = `Q${currentQuiz + 1}: ${currentQuizData.question}`;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  timeLeft = 20;
  updateTimer();
  startTimer();
}

// Deselect Answers
function deselectAnswers() {
  answerEls.forEach(answerEl => (answerEl.checked = false));
}

// Get Selected Answer
function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Start Timer
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimer();
    } else {
      clearInterval(timerInterval);
      currentQuiz++;
      if (currentQuiz < shuffledQuizData.length) {
        loadQuiz();
      } else {
        showMarksheet();
      }
    }
  }, 1000);
}

// Update Timer
function updateTimer() {
  timerElement.innerText = `Time: ${timeLeft}s`;
  if (timeLeft <= 5) {
    timerElement.classList.add('warning');
  } else {
    timerElement.classList.remove('warning');
  }
}

// Submit Answer
submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === shuffledQuizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < shuffledQuizData.length) {
      loadQuiz();
    } else {
      showMarksheet();
    }
  } else {
    alert("कृपया उत्तर चुनें।");
  }
});

// Show Marksheet
function showMarksheet() {
  clearInterval(timerInterval);
  quizSection.style.display = 'none';
  marksheet.style.display = 'block';

  // Set score in marksheet
  marksheetScore.value = `आपने ${score}/${shuffledQuizData.length} प्रश्न सही उत्तर दिए।`;

  // Add record to student records table
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${sessionStorage.getItem('studentName')}</td>
    <td>${sessionStorage.getItem('studentEmail')}</td>
    <td>${sessionStorage.getItem('learnerCode')}</td>
    <td>${score}</td>
  `;
  studentTableBody.appendChild(row);
}

// Reset Quiz
function resetQuiz() {
  loginForm.style.display = 'block';
  marksheet.style.display = 'none';
  studentName.value = '';
  studentEmail.value = '';
  learnerCode.value = '';
  score = 0;
  currentQuiz = 0;
  clearInterval(timerInterval);
  timerElement.innerText = 'Time: 20s';
}

// Event Listeners
document.getElementById('loginButton').addEventListener('click', handleLogin);
resetButton.addEventListener('click', resetQuiz);