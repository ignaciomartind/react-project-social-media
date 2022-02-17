import './notfound.css'

import svgNF from '../media/lighthouse.svg'

export default function NotFound() {
  return <div className="not-found">
      <img src={svgNF}></img>
      <p>404 - Not found.</p>
  </div>;
}
