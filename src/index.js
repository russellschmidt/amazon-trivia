/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * Add in our President data
*/
var President = function (fname, mname, lname) {
  this.firstName = fname;
  this.middleName = mname;
  this.lastName = lname;
  this.fullName = this.firstName + " " + this.middleName + " " + this.lastName;
  
};

var potusArray = [];

potusArray.push(new President("George","","Washington"));
potusArray.push(new President("John","","Adams"));
potusArray.push(new President("Thomas","","Jefferson"));
potusArray.push(new President("James","","Madison"));
potusArray.push(new President("James","","Monroe"));
potusArray.push(new President("John","Quincy","Adams"));
potusArray.push(new President("Andrew","","Jackson"));
potusArray.push(new President("Martin","","Van Buren"));
potusArray.push(new President("William","Henry","Harrison"));
potusArray.push(new President("John","","Tyler"));
potusArray.push(new President("James","Knox","Polk"));
potusArray.push(new President("Zachary","","Taylor"));
potusArray.push(new President("Millard","","Fillmore"));
potusArray.push(new President("Franklin","","Pierce"));
potusArray.push(new President("James","","Buchanan"));
potusArray.push(new President("Abraham","","Lincoln"));
potusArray.push(new President("Andrew","","Johnson"));
potusArray.push(new President("Ulysses","S.","Grant"));
potusArray.push(new President("Rutherford","Birchard","Hayes"));
potusArray.push(new President("James","Abram","Garfield"));
potusArray.push(new President("Chester","Alan","Arthur"));
potusArray.push(new President("Stephen","Grover","Cleveland"));
potusArray.push(new President("Benjamin","","Harrison"));
potusArray.push(new President("Stephen","Grover","Cleveland"));
potusArray.push(new President("William","","McKinley"));
potusArray.push(new President("Theodore","","Roosevelt"));
potusArray.push(new President("William","Howard","Taft"));
potusArray.push(new President("Thomas","Woodrow","Wilson"));
potusArray.push(new President("Warren","Gamaliel","Harding"));
potusArray.push(new President("John","Calvin","Coolidge"));
potusArray.push(new President("Herbert","Clark","Hoover"));
potusArray.push(new President("Franklin","Delano","Roosevelt"));
potusArray.push(new President("Harry","S.","Truman"));
potusArray.push(new President("Dwight","David","Eisenhower"));
potusArray.push(new President("John","Fitzgerald","Kennedy"));
potusArray.push(new President("Lyndon","Baines","Johnson"));
potusArray.push(new President("Richard","Milhous","Nixon"));
potusArray.push(new President("Gerald","Rudolph","Ford"));
potusArray.push(new President("James","Earl","Carter"));
potusArray.push(new President("Ronald","Wilson","Reagan"));
potusArray.push(new President("George","Herbert Walker","Bush"));
potusArray.push(new President("William","Jefferson","Clinton"));
potusArray.push(new President("George","Walker","Bush"));
potusArray.push(new President("Barack","Hussein","Obama"));



/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [
    {
        "Who was the first U.S. President?": [
            potusArray[0].fullName,
            potusArray[1].fullName,
            potusArray[2].fullName,
            potusArray[3].fullName,
            potusArray[4].fullName
        ]
    },
    {
        "Who was the second U.S. President?": [
            potusArray[1].fullName,
            potusArray[2].fullName,
            potusArray[3].fullName,
            potusArray[4].fullName,
            potusArray[5].fullName
        ]
    },
    {
        "Who was the third U.S. President?": [
            potusArray[2].fullName,
            potusArray[3].fullName,
            potusArray[4].fullName,
            potusArray[5].fullName,
            potusArray[1].fullName
        ]
    },
    {
        "Who was the fourth U.S. President?": [
            potusArray[3].fullName,
            potusArray[4].fullName,
            potusArray[5].fullName,
            potusArray[2].fullName,
            potusArray[6].fullName
        ]
    },
    {
        "Who was the fifth U.S. President?": [
            potusArray[4].fullName,
            potusArray[5].fullName,
            potusArray[6].fullName,
            potusArray[7].fullName,
            potusArray[3].fullName
        ]
    },
    {
        "Who was the sixth U.S. President?": [
            potusArray[5].fullName,
            potusArray[6].fullName,
            potusArray[7].fullName,
            potusArray[8].fullName,
            potusArray[2].fullName
        ]
    },
    {
        "Who was the seventh U.S. President?": [
            potusArray[5].fullName,
            potusArray[6].fullName,
            potusArray[7].fullName,
            potusArray[8].fullName,
            potusArray[2].fullName
        ]
    },
    {
        "Who was the eighth U.S. President?": [
            potusArray[7].fullName,
            potusArray[8].fullName,
            potusArray[9].fullName,
            potusArray[10].fullName,
            potusArray[6].fullName
        ]
    },
    {
        "Who was the ninth U.S. President?": [
            potusArray[8].fullName,
            potusArray[9].fullName,
            potusArray[10].fullName,
            potusArray[11].fullName,
            potusArray[7].fullName,
        ]
    },
    {
        "Who was the tenth U.S. President?": [
            potusArray[9].fullName,
            potusArray[10].fullName,
            potusArray[11].fullName,
            potusArray[12].fullName,
            potusArray[8].fullName
        ]
    },
    {
        "Who was the eleventh U.S. President?": [
            potusArray[10].fullName,
            potusArray[11].fullName,
            potusArray[12].fullName,
            potusArray[13].fullName,
            potusArray[9].fullName
        ]
    },
    {
        "Which U.S. President personally led an army while in office as President?": [
            potusArray[0].fullName,
            potusArray[4].fullName,
            potusArray[8].fullName,
            potusArray[13].fullName,
            potusArray[17].fullName
        ]
    },
    {
        "Which U.S. President was the fattest?": [
            potusArray[26].fullName,
            potusArray[21].fullName,
            potusArray[7].fullName,
            potusArray[41].fullName,
            potusArray[12].fullName
        ]
    },
    {
        "Which President did not have a blood relative also serve as President?": [
            potusArray[7].fullName,
            potusArray[5].fullName,
            potusArray[22].fullName,
            potusArray[31].fullName,
            potusArray[42].fullName
        ]
    },
    {
        "Which President served the shortest time as President?": [
            potusArray[8].fullName,
            potusArray[11].fullName,
            potusArray[15].fullName,
            potusArray[24].fullName,
            potusArray[36].fullName
        ]
    },
    {
        "Which President served the longest as President?": [
            potusArray[31].fullName,
            potusArray[0].fullName,
            potusArray[15].fullName,
            potusArray[1].fullName,
            potusArray[25].fullName
        ]
    },
    {
        "Which President served the shortest time as President?": [
            potusArray[10].fullName,
            potusArray[13].fullName,
            potusArray[15].fullName,
            potusArray[26].fullName,
            potusArray[30].fullName
        ]
    },
    {
        "Which President was the first Republican to hold the office?": [
            potusArray[15].fullName,
            potusArray[17].fullName,
            potusArray[22].fullName,
            potusArray[30].fullName,
            potusArray[2].fullName
        ]
    },
    {
        "Which President was the first Democrat to hold the office?": [
            potusArray[6].fullName,
            potusArray[7].fullName,
            potusArray[13].fullName,
            potusArray[21].fullName,
            potusArray[27].fullName
        ]
    },
    {
        "Which President served two non-consecutive terms?": [
            potusArray[21].fullName,
            potusArray[25].fullName,
            potusArray[16].fullName,
            potusArray[31].fullName,
            potusArray[1].fullName
        ]
    },
    {
        "Which President was not a general before becoming elected as President?": [
            potusArray[10].fullName,
            potusArray[11].fullName,
            potusArray[8].fullName,
            potusArray[6].fullName,
            potusArray[17].fullName
        ]
    },
    {
        "Which President was the oldest to take office?": [
            potusArray[39].fullName,
            potusArray[38].fullName,
            potusArray[40].fullName,
            potusArray[10].fullName,
            potusArray[22].fullName
        ]
    },
    {
        "Which President was the youngest to take the oath of office of President?": [
            potusArray[25].fullName,
            potusArray[31].fullName,
            potusArray[34].fullName,
            potusArray[16].fullName,
            potusArray[9].fullName
        ]
    },
    {
        "Which President was the youngest to be elected as President?": [
            potusArray[34].fullName,
            potusArray[25].fullName,
            potusArray[22].fullName,
            potusArray[30].fullName,
            potusArray[43].fullName
        ]
    },
    {
        "Which President was not formally associated with a political party?": [
            potusArray[0].fullName,
            potusArray[2].fullName,
            potusArray[1].fullName,
            potusArray[4].fullName,
            potusArray[6].fullName
        ]
    },
    {
        "Which President was the first and only President from the Federalist Party?": [
            potusArray[1].fullName,
            potusArray[3].fullName,
            potusArray[7].fullName,
            potusArray[11].fullName,
            potusArray[13].fullName
        ]
    },
    {
        "Which President was not from the Whig Party?": [
            potusArray[18].fullName,
            potusArray[8].fullName,
            potusArray[9].fullName,
            potusArray[11].fullName,
            potusArray[12].fullName
        ]
    },
    {
        "Which Democratic President did not declare war during their term in office?": [
            potusArray[16].fullName,
            potusArray[10].fullName,
            potusArray[27].fullName,
            potusArray[31].fullName
        ]
    },
    {
        "Which President was born in California?": [
            potusArray[36].fullName,
            potusArray[39].fullName,
            potusArray[37].fullName,
            potusArray[43].fullName
        ]
    },
    {
        "Which President did not attend Harvard?": [
            potusArray[41].fullName,
            potusArray[1].fullName,
            potusArray[34].fullName,
            potusArray[31].fullName,
            potusArray[25].fullName,
            potusArray[5].fullName,
            potusArray[43].fullName,
            potusArray[42].fullName,
            potusArray[18].fullName
        ]
    },
    {
        "Which President did not attend Yale?": [
            potusArray[29].fullName,
            potusArray[26].fullName,
            potusArray[42].fullName,
            potusArray[40].fullName,
            potusArray[41].fullName,
            potusArray[37].fullName
        ]
    },
    {
        "Which President did not attend college or graduate school in California?": [
            potusArray[42].fullName,
            potusArray[36].fullName,
            potusArray[30].fullName,
            potusArray[39].fullName,
            potusArray[43].fullName
        ]
    },
    {
        "Which President was never a slaveholder at some point in their life?": [
            potusArray[1].fullName,
            potusArray[0].fullName,
            potusArray[2].fullName,
            potusArray[3].fullName,
            potusArray[4].fullName,
            potusArray[6].fullName,
            potusArray[7].fullName, 
            potusArray[8].fullName,
            potusArray[9].fullName,
            potusArray[10].fullName,
            potusArray[11].fullName,
            potusArray[16].fullName,
            potusArray[17].fullName
        ]
    },
    {
        "Which President did not publish a book in their lifetime?": [
            potusArray[15].fullName,  
            potusArray[17].fullName,  
            potusArray[2].fullName,  
            potusArray[33].fullName,
            potusArray[34].fullName, 
            potusArray[36].fullName,
            potusArray[38].fullName,
            potusArray[39].fullName,
            potusArray[40].fullName,
            potusArray[41].fullName,
            potusArray[42].fullName,
            potusArray[43].fullName
        ]
    },
    {
        "Which President did not attend school in California?": [
            potusArray[42].fullName,
            potusArray[36].fullName,
            potusArray[30].fullName,
            potusArray[39].fullName,
            potusArray[43].fullName
        ]
    },
    {
        "Which President was the tallest?": [
            potusArray[15].fullName,
            potusArray[3].fullName,
            potusArray[4].fullName,
            potusArray[0].fullName,
            potusArray[39].fullName
        ]
    },
    {
        "Which President was the shortest?": [
            potusArray[3].fullName,
            potusArray[12].fullName,
            potusArray[4].fullName,
            potusArray[2].fullName,
            potusArray[26].fullName
        ]
    },
    {
        "Which President is not thought to have been an alcoholic?": [
            potusArray[32].fullName,
            potusArray[7].fullName,
            potusArray[14].fullName,
            potusArray[16].fullName,
            potusArray[17].fullName,
            potusArray[20].fullName,
            potusArray[29].fullName,
            potusArray[42].fullName
        ]
    },
    {
        "Which President was first to view the Pacific Ocean?": [
            potusArray[17].fullName,
            potusArray[15].fullName,
            potusArray[11].fullName,
            potusArray[19].fullName,
            potusArray[25].fullName
        ]
    }, 
    {
        "Which President was first to live in the White House?": [
            potusArray[0].fullName,
            potusArray[1].fullName,
            potusArray[2].fullName,
            potusArray[3].fullName,
            potusArray[4].fullName,
            potusArray[5].fullName
        ]
    }, 
    {
        "Which President was first to be elected as a bachelor?": [
            potusArray[14].fullName,
            potusArray[19].fullName,
            potusArray[24].fullName,
            potusArray[29].fullName,
            potusArray[9].fullName
        ]
    },
    {
        "Which President was first to have been divorced before taking office?": [
            potusArray[39].fullName,
            potusArray[38].fullName,
            potusArray[37].fullName,
            potusArray[41].fullName,
            potusArray[20].fullName
        ]
    }, 
    {
        "Which President was first to throw out the first pitch at a baseball game?": [
            potusArray[26].fullName,
            potusArray[21].fullName,
            potusArray[22].fullName,
            potusArray[23].fullName,
            potusArray[25].fullName
        ]
    }, 
    {
        "Which President was first to receive a Nobel Prize?": [
            potusArray[25].fullName,
            potusArray[43].fullName,
            potusArray[42].fullName,
            potusArray[38].fullName,
            potusArray[33].fullName
        ]
    }, 
    {
        "Which President was first to have a car at the White House?": [
            potusArray[26].fullName,
            potusArray[25].fullName,
            potusArray[24].fullName,
            potusArray[27].fullName,
            potusArray[28].fullName
        ]
    }, 
    {
        "Which President was first to have been born in a hospital?": [
            potusArray[38].fullName,
            potusArray[36].fullName,
            potusArray[37].fullName,
            potusArray[34].fullName,
            potusArray[40].fullName
        ]
    }, 
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

//     if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.05aecccb3-1461-48fb-a008-822ddrt6b516") {
//         context.fail("Invalid Application ID");
//      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "United States of America Presidential Trivia"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Presidential trivia. I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}