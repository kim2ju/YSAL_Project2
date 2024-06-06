import { useNavigate, useParams } from "react-router-dom";
import matchup_results from "./data/matchup_results.json";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

interface MatchupResults {
    [key: string]: (string | number)[][];
}

const results: MatchupResults = matchup_results;    

const ResultGroundBall = () => {
const [result, setResult] = useState<(string | number)[][]>([]);

const { player, team } = useParams();
const navigate = useNavigate();

useEffect(() => {
    const select: string = `${team}-${player}`;
    if (Array.isArray(results[select])) {
        setResult(results[select]);
    }
}, [player, team]);

  return (
    <div style={{ width: 600 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Result</h1>
        <FaHome style={{ fontSize: '32px', cursor: 'pointer' }} onClick={() => navigate(-1)} />
      </div>
      {
        result.length === 0 ? (
            <div>데이터가 없습니다.</div>
        ) : (
            <table style={{ width: '100%' }}>
            <thead>
              <tr style={{ backgroundColor: 'yellowgreen' }}>
                <th style={{ padding: '8px 16px 8px 16px' }}>투수</th>
                <th style={{ padding: '8px 16px 8px 16px' }}>eRE/100</th>
                <th style={{ padding: '8px 16px 8px 16px' }}>GB%</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: 'center' }}>
              {result.map((data) => (
                <tr style={{ backgroundColor: 'white', color: '#213547'}}>
                  <td style={{ padding: '8px 16px 8px 16px' }}>{data[0]}</td>
                  <td style={{ padding: '8px 16px 8px 16px' }}>{data[1]}</td>
                  <td style={{ padding: '8px 16px 8px 16px' }}>{data[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      }

    </div>
  )
}

export default ResultGroundBall;