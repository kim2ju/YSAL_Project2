import { useNavigate, useParams } from "react-router-dom";
import pitcher_data from "./data/pitcher_data.json";
import batter_data from "./data/batter_data.json";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

const Result = () => {
  const [result, setResult] = useState<{ name: string; "eRE/100": string }[]>([]);

  const { player, team } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const pitchers : string [] = [];
    const result: { name: string; "eRE/100": string }[] = [];

    pitcher_data.map((pitcher) => {
      if (pitcher.Team === team) {
        pitchers.push(pitcher.Name);
      }
    });

    batter_data.map((batter: { [key: string]: string }) => {
      if (batter.batter_name === player) {
        pitchers.map((pitcher) => {
          result.push({ "name": pitcher, "eRE/100": batter[pitcher] });
        })
      }
    });
    
    result.sort((a, b) => parseFloat(a["eRE/100"]) - parseFloat(b["eRE/100"]));
    setResult(result);
  }, [player, team]);

  return (
    <div style={{ width: 600 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Result</h1>
        <FaHome style={{ fontSize: '32px', cursor: 'pointer' }} onClick={() => navigate(-1)} />
      </div>
      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: 'yellowgreen' }}>
            <th style={{ padding: '8px 16px 8px 16px' }}>투수</th>
            <th style={{ padding: '8px 16px 8px 16px' }}>eRE/100</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          {result.map((data) => (
            <tr style={{ backgroundColor: 'white', color: '#213547'}}>
              <td style={{ padding: '8px 16px 8px 16px' }}>{data.name}</td>
              <td style={{ padding: '8px 16px 8px 16px' }}>{data["eRE/100"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Result;