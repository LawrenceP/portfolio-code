angular.
  module('questions').
  component('frenchQuizQuestions', {
    templateUrl: 'questions/questions.html',
    controller: function frenchQuizController($http) {
      var self = this;
      self.inProgress = false;

      self.setGivenAnswer = function setGivenAnswer(answer) {
        self.givenAnswer = answer;
        self.btnPlaceholderCSSChange('#4ABDAC');
      };

      self.checkAnswer = function checkAnswer(answer) {
        if (self.question.correctAnswer === answer) {
          self.correctAnswers++;
        }

        self.questionNumber++;
        self.getNextQuestion(self.questionNumber);
      };

      self.getQuestionsAmount = function getQuestionsAmount() {
        $http.get('json-questions/questions.txt').then(function(response) {
          self.questions = response.data;
          self.questionsLength = self.questions.length;
        });
      }

      self.getNextQuestion = function getNextQuestion(questionNumber) {
        self.btnPlaceholderCSSChange('#fff');
        $http.get('json-questions/questions.txt').then(function(response) {
          self.questions = response.data;
          if (self.questions[questionNumber]) {
            self.question = self.questions[questionNumber];
          } else {
            self.calculateLevel();
            self.quizOver = true;
          }
        });

        self.givenAnswer = 'ANSWER_HERE';
      };

      self.btnPlaceholderCSSChange = function btnPlaceholderCSSChange(colour) {
        $('.btn-placeholder').css({
          'background-color': colour
        });
      };

      self.calculateLevel = function calculateLevel() {
        switch (self.correctAnswers) {
            case 0:
                self.level = "A1";
                break;
            case 1:
                self.level = "A2";
                break;
            case 2:
                self.level = "A2";
                break;
            case 3:
                self.level = "B1";
                break;
            case 4:
                self.level = "B1";
                break;
            case 5:
                self.level = "B2";
                break;
            case 6:
                self.level = "B2";
                break;
            case 7:
                self.level = "C1";
                break;
            case 8:
                self.level = "C1";
                break;
            case 9:
                self.level = "C2";
                break;
            case 10:
                self.level = "C2";
        }       
      };

      self.start = function start() {
        self.questionNumber = 0;
        self.correctAnswers = 0;
        self.quizOver = false;        
        self.getNextQuestion(0);
        self.inProgress = true;
        self.getQuestionsAmount();
      };
    }
  });