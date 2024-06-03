import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import team_data from './data/team_data.json';
import { useEffect, useState } from 'react';
import batter_data from './data/batter_data.json';

const batterLists = batter_data.map((batter) => batter.batter_name);

const getRecommendations = (inputStr: string, batterLists: string[]) => {
    const recommendations = new Set();
    const lowerInputStr = inputStr.toLowerCase();

    batterLists.map(batter => {
        if (batter.toLowerCase().startsWith(lowerInputStr)) {
            recommendations.add(batter);
        }
    });

    return Array.from(recommendations).sort();
};


function App() {
    const [team, setTeam] = useState('ARI');
    const [player, setPlayer] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    
    const navigate = useNavigate();

    useEffect(() => {
        const newSuggestions = getRecommendations(player, batterLists) as string[];
        setSuggestions(newSuggestions);
    }, [player]);

    return (
        <div>
            <div style={{ display: 'flex', width: 600}}>
                <select onChange={(e) => setTeam(e.target.value)}>
                    {team_data.map((team) => (
                        <option
                            value={team.abbreviation}>
                            {team.name}
                        </option>
                    ))}
                </select>
                <input type='text' value={player} onChange={(e) => setPlayer(e.target.value)} placeholder="선수 이름" style={{ flex: 'auto' }} />
                <button onClick={() => navigate(`/result/${player}/${team}`)}><FaSearch /></button>
            </div>
            <div style={{ width: 600, height: 40, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20, rowGap: 10, columnGap: 20 }}>
                {suggestions.map((suggestion, index) => (
                    <button
                        key={index}
                        style={{ height: 'fit-content', backgroundColor: 'white', color: '#213547', padding: '4px 12px', borderRadius: 20 }}
                        onClick={() => setPlayer(suggestion)}>
                        {suggestion}
                    </button>
                ))}
            </div>
        </div>
  )
}

export default App;
