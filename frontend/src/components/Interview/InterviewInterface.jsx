import React from 'react';

/**
 * Interview Interface Component
 * 
 * Main interview session UI with question display and answer input
 */
const InterviewInterface = () => {
  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [timeRemaining, setTimeRemaining] = React.useState(600); // 10 minutes

  React.useEffect(() => {
    // Load first question and start timer
    const timer = setInterval(() => {
      setTimeRemaining(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Submit answer to API
      console.log('Submitting answer:', answer);
    } catch (err) {
      console.error('Error submitting answer:', err);
    } finally {
      setLoading(false);
    }
  };

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Timer */}
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Interview Session</h1>
          <div className={`text-2xl font-bold ${timeRemaining < 60 ? 'text-red-600' : 'text-gray-900'}`}>
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Question 1 of 5</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {question || 'Tell me about your professional experience and key achievements in backend development...'}
          </p>
        </div>

        {/* Answer Input */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <label className="block text-sm font-medium text-gray-900 mb-4">Your Answer</label>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            rows="6"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />

          {/* Action Buttons */}
          <div className="mt-6 flex justify-between">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
              Skip Question
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading || !answer.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Evaluating...' : 'Submit Answer'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewInterface;
