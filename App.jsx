import React, { useState } from 'react';
import './App.css';

const matchesData = {
  Athletics: [
    { teamA: 'IIT BOMBAY', teamB: 'IIT KHARGHPUR', location: 'ADV Ground      ', time: '10:00' },
    { teamA: 'IIT ROURKEE', teamB: 'IIT DELHI', location: 'ADV Ground      ', time: '11:30' },
  ],
  Badminton: [
    { teamA: 'JAYANTH NAYAK', teamB: 'SIDDHU ', location: 'SAC      ', time: '10:30' },
    { teamA: 'TANISHKA MISHRA', teamB: 'RATHOD KAVYA', location: 'SAC      ', time: '11:45' },
  ],
  Volleyball: [
    { teamA: 'Ball Hogz', teamB: 'D-Fence', location: 'Rajputana Ground  ', time: '18:00' },
    { teamA: 'Net Rippers', teamB: 'Dragon Trainers', location: 'Rajputana Ground  ', time: '20:15' },
    { teamA: 'Game of Throws', teamB: 'Basket Hounds', location: 'Rajputana Ground  ', time: '20:15' },
    { teamA: 'Slytherin', teamB: 'Defenders', location: 'Rajputana Ground  ', time: '20:15' },
  ],
  Cricket: [
    { teamA: 'RCB', teamB: 'CSK', location: 'Gymkhana Ground  ', time: '10:30' },
    { teamA: 'RR', teamB: 'LSG', location: 'Gymkhana Ground   ', time: '13:45' },
    { teamA: 'GT', teamB: 'PBKS', location: 'Gymkhana Ground   ', time: '10:30' },
    { teamA: 'SRH', teamB: 'DC', location: 'Gymkhana Ground  ', time: '10:30' },
  ],
  Football: [
    { teamA: 'NY Yorks', teamB: 'KING Yorks', location: 'Gymkhana Ground  ', time: '10:30' },
    { teamA: 'NV Titans', teamB: '82 Club', location: 'Gymkhana Ground  ', time: '12:45' },
    { teamA: 'League', teamB: 'Frans FFF', location: 'Gymkhana Ground  ', time: '15:30' },
    { teamA: 'Club Team', teamB: 'Maters', location: 'Gymkhana Ground  ', time: '17:45' },
  ],
  Squash: [
    { teamA: 'Player 1', teamB: 'Player 2', location: 'SAC  ', time: '10:30' },
    { teamA: 'Player A', teamB: 'Player B', location: 'SAC  ', time: '13:45' },
  ],
  Tennis: [
    { teamA: 'Player 1', teamB: 'Player 2', location: 'Rajputana Tennis Court  ',time: '10:30' },
    { teamA: 'Player A', teamB: 'Player B', location: 'Rajputana Tennis Court  ', time: '13:45' },
  ],
  Handball: [
    { teamA: 'Net Rippers', teamB: 'Player 2', location: 'Rajputana Ground  ', time: '10:30' },
    { teamA: 'Player A', teamB: 'Player B', location: 'Rajputana Ground  ', time: '13:45' },
  ],
};

function App() {
  const [selectedSport, setSelectedSport] = useState(null);

  const handleSportClick = (sport) => {
    setSelectedSport(sport);
  };

  return (
    <div className="App">
      <div className="sidebar">
        {Object.keys(matchesData).map((sport) => (
          <div
            key={sport}
            className={`icon ${selectedSport === sport ? 'active' : ''}`}
            onClick={() => handleSportClick(sport)}
          >
            {sport}
          </div>
        ))}
      </div>
      <div className="main">
        <h1>Upcoming Matches</h1>
        {selectedSport ? (
          <div className="matchDisplay">
            {matchesData[selectedSport].map((match, index) => (
              <div key={index} className="match">
                <h5>
                  {match.teamA} vs. {match.teamB}
                </h5>
                <p>
                  Location: {match.location}
                    Time: {match.time}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Select a sport to view matches</p>
        )}
      </div>
    </div>
  );
}

export default App
