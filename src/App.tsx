import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>about</h1>
      <h2>Yu-Tse Wu</h2>
      <h3>吳侑澤</h3>
      <div className="card interest">
        <h4>興趣</h4>
        <ul>
          <li>排球相關事項</li>
          <li>各式PC遊戲</li>
          <li>探索未知事項</li>
        </ul>
      </div>

      <div className="card info">
        <h5>個人資訊</h5>
        <table>
          <tr>
            <th>項目</th>
            <th>詳細資訊</th>
          </tr>
          <tr>
            <td>生辰</td>
            <td>2004/08/30</td>
          </tr>
          <tr>
            <td>性別</td>
            <td>男</td>
          </tr>
          <tr>
            <td>星座</td>
            <td>處女座</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>411630600@o365.tku.edu.tw</td>
          </tr>
        </table>
      </div>

      <h6>其他</h6>
      <form action="/submit" method="post">

        <div className="badge-container">
          <img src="volleyball-badge.png" alt="排球" className="badge" />
        </div>
        <label htmlFor="name">留言</label>
        <input type="text" id="name" name="name" placeholder="輸入留言" />
        <input type="submit" value="提交" />
      </form>
    </>
  )
}

export default App
