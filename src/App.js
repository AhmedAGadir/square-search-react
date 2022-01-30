import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  const codingSvg = (<svg className="svg-inline--fa fa-laptop fa-w-20 fa-stack-1x fa-inverse" id="Layer_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m481.081 438.5h-450.162c-17.076 0-30.919-13.843-30.919-30.919v-270.479h512v270.479c0 17.076-13.843 30.919-30.919 30.919z" fill="#a9dbf5" /><path d="m481.095 137.102v301.398c17.069 0 30.905-13.849 30.905-30.932v-270.466z" fill="#88c3e0" /><g fill="#43809f"><path d="m103.87 233.967c-2.929-2.928-7.678-2.928-10.606 0l-46.431 46.431c-2.929 2.93-2.929 7.678 0 10.607l45.816 45.816c1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196c2.929-2.93 2.929-7.678 0-10.607l-40.513-40.513 41.127-41.127c2.93-2.929 2.93-7.678.001-10.607z" /><path d="m264.52 280.397-46.431-46.431c-2.929-2.928-7.678-2.928-10.606 0-2.929 2.93-2.929 7.678 0 10.607l41.127 41.127-40.513 40.513c-2.929 2.93-2.929 7.678 0 10.607 1.464 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.303-2.196l45.817-45.816c2.928-2.929 2.928-7.677 0-10.607z" /><path d="m185.813 206.063c-3.874-1.471-8.203.477-9.673 4.351l-54.902 144.638c-1.47 3.872.478 8.203 4.35 9.673.876.333 1.775.49 2.66.49 3.025 0 5.876-1.844 7.013-4.841l54.902-144.638c1.47-3.872-.477-8.203-4.35-9.673z" /></g><path d="m386.318 234.23h-48.419c-8.534 0-15.453-6.918-15.453-15.453 0-8.534 6.918-15.453 15.453-15.453h48.419c8.534 0 15.453 6.918 15.453 15.453 0 8.534-6.919 15.453-15.453 15.453z" fill="#29cef6" /><path d="m465.642 296.041h-127.743c-8.534 0-15.453-6.918-15.453-15.453 0-8.534 6.918-15.453 15.453-15.453h127.742c8.534 0 15.453 6.918 15.453 15.453.001 8.534-6.918 15.453-15.452 15.453z" fill="#ffc328" /><path d="m427.695 357.852h-89.796c-8.534 0-15.453-6.918-15.453-15.453 0-8.534 6.918-15.453 15.453-15.453h89.796c8.534 0 15.453 6.918 15.453 15.453 0 8.534-6.919 15.453-15.453 15.453z" fill="#f78e36" /><path d="m512 147.737h-512v-43.318c0-17.076 13.843-30.919 30.919-30.919h450.162c17.076 0 30.919 13.843 30.919 30.919z" fill="#43809f" /><path d="m481.095 73.5v74.237h30.905v-43.305c0-17.083-13.837-30.932-30.905-30.932z" fill="#3a7190" /><circle cx="49.455" cy="111.126" fill="#29cef6" r="15.453" /><circle cx="109.37" cy="111.126" fill="#f3f3f3" r="15.453" /><circle cx="169.285" cy="111.126" fill="#f78e36" r="15.453" /></g></svg>)
  const cyberSecuritySvg = (<svg className="svg-inline--fa fa-laptop fa-w-20 fa-stack-1x fa-inverse" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Processor_security" data-name="Processor security"><g fill="#9bc9ff"><path d="m19 36v5a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4v-18a4 4 0 0 0 -4-4h-18a4 4 0 0 0 -4 4zm7-5a2 2 0 0 1 2-2v-2a4 4 0 0 1 8 0v2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2-2z" /><circle cx="32" cy="8" r="2" /><circle cx="48" cy="7" r="2" /><circle cx="18" cy="5" r="2" /><circle cx="40" cy="59" r="2" /><circle cx="49" cy="53" r="2" /><circle cx="18" cy="59" r="2" /><circle cx="55" cy="19" r="2" transform="matrix(.963 -.27 .27 .963 -3.086 15.529)" /><circle cx="59" cy="44" r="2" transform="matrix(.963 -.27 .27 .963 -9.677 17.532)" /><circle cx="59" cy="28" r="2" transform="matrix(.963 -.27 .27 .963 -5.364 16.94)" /><circle cx="9" cy="19" r="2" transform="matrix(.27 -.963 .963 .27 -11.723 22.545)" /><circle cx="9" cy="48" r="2" transform="matrix(.207 -.978 .978 .207 -39.824 46.883)" /><path d="m4.921 36a2 2 0 0 0 1.529-3.375l-.45.375.45-.375a2 2 0 1 0 -1.529 3.375z" /><circle cx="32" cy="34" r="2" transform="matrix(.963 -.27 .27 .963 -7.98 9.884)" /><path d="m36 27a4 4 0 0 0 -8 0v2h8z" /></g><path d="m27 11h2v2h-2z" fill="#1e81ce" /><path d="m53 35h2v2h-2z" fill="#1e81ce" /><path d="m35 51h2v2h-2z" fill="#1e81ce" /><path d="m27 54h2v2h-2z" fill="#1e81ce" /><path d="m11 31h2v2h-2z" fill="#1e81ce" /><path d="m35 11h2v2h-2z" fill="#1e81ce" /><path d="m51 27h2v2h-2z" fill="#1e81ce" /><path d="m46 17h2v2h-2z" fill="#1e81ce" /><path d="m16 17h2v2h-2z" fill="#1e81ce" /><path d="m46 45h2v2h-2z" fill="#1e81ce" /><path d="m16 45h2v2h-2z" fill="#1e81ce" /><path d="m31.882 31a2.994 2.994 0 0 0 -.882 5.822v2.178h2v-2.185a2.993 2.993 0 0 0 -1.118-5.815zm1.118 2.961a1 1 0 0 1 -.96 1.039 1 1 0 0 1 -.719-.266 1 1 0 0 1 .639-1.734h.04a1 1 0 0 1 1 .96z" fill="#1e81ce" /><path d="m37 28.184v-1.184a5 5 0 0 0 -10 0v1.184a3 3 0 0 0 -2 2.816v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-8a3 3 0 0 0 -2-2.816zm-8-1.184a3 3 0 0 1 6 0v1h-6zm8 12a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1z" fill="#1e81ce" /><path d="m59 41a2.951 2.951 0 0 0 -1.285.3l-2.3-2.3h-9.415v-2h5v-2h-5v-2h5.236l5.687-2.844a2.994 2.994 0 1 0 -.923-2.156 2.9 2.9 0 0 0 .037.363l-5.273 2.637h-4.764v-2h3v-2h-3v-2h4.414l3.3-3.3a2.951 2.951 0 0 0 1.286.3 3 3 0 1 0 -3-3 2.951 2.951 0 0 0 .3 1.285l-2.714 2.715h-3.586a5.006 5.006 0 0 0 -5-5v-2.586l5.715-5.714a2.951 2.951 0 0 0 1.285.3 3 3 0 1 0 -3-3 2.951 2.951 0 0 0 .3 1.285l-6.3 6.3v3.415h-2v-3h-2v3h-2v-7.184a3 3 0 1 0 -2 0v7.184h-2v-3h-2v3h-2v-7.414l-4.3-4.3a2.951 2.951 0 0 0 .3-1.286 3 3 0 1 0 -3 3 2.951 2.951 0 0 0 1.285-.3l3.715 3.714v6.586a5.006 5.006 0 0 0 -5 5h-3.586l-2.714-2.715a2.951 2.951 0 0 0 .3-1.285 3 3 0 1 0 -3 3 2.951 2.951 0 0 0 1.285-.3l3.3 3.3h4.415v2h-6.362l-5.238 4.364a2.953 2.953 0 0 0 -1.4-.364 3 3 0 1 0 3 3 2.972 2.972 0 0 0 -.237-1.168l4.599-3.832h5.638v2h-3v2h3v2h-9v2h9v2h-5.535l-4.03 6.044a2.968 2.968 0 0 0 -.435-.044 3.028 3.028 0 1 0 2.21.988l3.325-4.988h4.465a5.006 5.006 0 0 0 5 5v6.586l-3.715 3.714a2.951 2.951 0 0 0 -1.285-.3 3 3 0 1 0 3 3 2.951 2.951 0 0 0 -.3-1.285l4.3-4.3v-7.415h2v6h2v-6h2v8.554l6.074 3.8a3.044 3.044 0 1 0 1.069-1.691l-5.143-3.217v-7.446h2v3h2v-3h2v8h7.184a3 3 0 1 0 0-2h-5.184v-6a5.006 5.006 0 0 0 5-5h8.586l1.714 1.715a2.951 2.951 0 0 0 -.3 1.285 3 3 0 1 0 3-3zm0-14a1 1 0 1 1 -1 1 1 1 0 0 1 1-1zm-4-9a1 1 0 1 1 -1 1 1 1 0 0 1 1-1zm-7-12a1 1 0 1 1 -1 1 1 1 0 0 1 1-1zm-16 1a1 1 0 1 1 -1 1 1 1 0 0 1 1-1zm-15-2a1 1 0 1 1 1 1 1 1 0 0 1 -1-1zm-9 14a1 1 0 1 1 1 1 1 1 0 0 1 -1-1zm-3 16a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm3 14a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm10 11a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm22-2a1 1 0 1 1 -1 1 1 1 0 0 1 1-1zm9-6a1 1 0 1 1 -1 1 1 1 0 0 1 1-1zm-5-11a3 3 0 0 1 -3 3h-18a3 3 0 0 1 -3-3v-18a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3zm15 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z" fill="#1e81ce" /></g></svg>)
  const cloudSeverSvg = (
    <svg className="svg-inline--fa fa-laptop fa-w-20 fa-stack-1x fa-inverse" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      viewBox="0 0 512 512" >
      <path style={{ fill: '#D1E7F8' }} d="M410.987,128.597c0.001-0.183,0.007-0.364,0.007-0.547c0-66.578-53.972-120.551-120.55-120.551
    c-51.869,0-96.082,32.76-113.089,78.716c-7.095-4.097-15.322-6.454-24.105-6.454c-26.669,0-48.288,21.619-48.288,48.288
    c0,0.076,0.005,0.15,0.006,0.225C50.554,131.769,7.5,177,7.5,232.295l0,0c0,57.573,46.672,104.245,104.245,104.245h288.511
    c57.573,0,104.245-46.672,104.245-104.245l0,0C504.5,178.346,463.518,133.969,410.987,128.597z"/>
      <path style={{ fill: '#787680' }} d="M7.5,396.821h497v88.166c-7.62,7.62-11.893,11.893-19.513,19.513H27.013
    c-7.62-7.62-11.893-11.893-19.513-19.513V396.821z"/>
      <g>
        <circle style={{ fill: '#57565C' }} cx="156.66" cy="450.66" r="22.366" />
        <circle style={{ fill: '#57565C' }} cx="225.4" cy="450.66" r="22.366" />
        <circle style={{ fill: '#57565C' }} cx="87.93" cy="450.66" r="22.366" />
      </g>
      <circle style={{ fill: '#FFE477' }} s cx="136.66" cy="450.66" r="22.366" />
      <circle style={{ fill: '#91DC5A' }} s cx="205.4" cy="450.66" r="22.366" />
      <circle style={{ fill: '#FF7956' }} s cx="67.929" cy="450.66" r="22.366" />
      <rect x="234.5" y="336.54" style={{ fill: '#57A4FF' }} s width="43.01" height="60.28" />
      <g>
        <path style={{ fill: '#B3D8F4' }} s d="M183.25,79.762c8.782,0,17.009,2.356,24.105,6.454c15.341-41.455,52.821-72.172,98.087-77.792
      c-4.914-0.61-9.919-0.925-14.998-0.925c-49.451,0-91.943,29.777-110.535,72.377C181.013,79.802,182.127,79.762,183.25,79.762z"/>
        <path style={{ fill: '#B3D8F4' }} s d="M37.5,232.295L37.5,232.295c0-55.295,43.055-100.527,97.468-104.02c0-0.075-0.006-0.15-0.006-0.225
      c0-21.427,13.956-39.594,33.275-45.908c-4.717-1.543-9.753-2.38-14.986-2.38c-26.669,0-48.288,21.619-48.288,48.288
      c0,0.075,0.005,0.15,0.006,0.225C50.555,131.769,7.5,177,7.5,232.295l0,0c0,57.573,46.672,104.245,104.245,104.245h30
      C84.172,336.54,37.5,289.868,37.5,232.295z"/>
      </g>
      <path style={{ fill: '#57565C' }} s d="M37.5,484.987v-88.166h-30v88.166L27.013,504.5h30C49.393,496.88,45.12,492.607,37.5,484.987z" />
      <path style={{ fill: '#FFB655' }} s d="M134.296,450.66c0-8.758,5.034-16.34,12.366-20.011c-3.009-1.507-6.406-2.355-10-2.355
    c-12.352,0-22.366,10.014-22.366,22.366s10.014,22.366,22.366,22.366c3.594,0,6.991-0.848,10-2.355
    C139.33,467,134.296,459.418,134.296,450.66z"/>
      <path style={{ fill: '#64C37D' }} s d="M203.029,450.66c0-8.758,5.034-16.34,12.366-20.011c-3.009-1.507-6.406-2.355-10-2.355
    c-12.352,0-22.366,10.014-22.366,22.366s10.014,22.366,22.366,22.366c3.594,0,6.991-0.848,10-2.355
    C208.063,467,203.029,459.418,203.029,450.66z"/>
      <path style={{ fill: '#FF3F62' }} s d="M65.563,450.66c0-8.758,5.034-16.34,12.366-20.011c-3.009-1.507-6.406-2.355-10-2.355
    c-12.352,0-22.366,10.014-22.366,22.366s10.014,22.366,22.366,22.366c3.594,0,6.991-0.848,10-2.355
    C70.597,467,65.563,459.418,65.563,450.66z"/>
      <rect x="234.5" y="336.54" style={{ fill: '#006DF0' }} s width="20" height="60.28" />
      <rect x="235.83" y="304.04" width="15" height="15" />
      <rect x="260.83" y="304.04" width="15" height="15" />
      <rect x="210.83" y="304.04" width="15" height="15" />
      <rect x="285.83" y="304.04" width="15" height="15" />
      <rect x="417.67" y="472" width="55.19" height="15" />
      <path d="M111.745,344.04h288.511C461.872,344.04,512,293.912,512,232.295c0-27.841-10.301-54.515-29.006-75.108
    c-17.07-18.794-39.822-31.129-64.641-35.176C415.188,54.199,359.025,0,290.444,0c-26.683,0-52.255,8.128-73.955,23.505
    c-18.973,13.445-33.747,31.492-43.087,52.527c-6.401-2.48-13.241-3.77-20.152-3.77c-28.516,0-52.104,21.508-55.396,49.152
    C42.471,128.297,0,175.769,0,232.295C0,293.912,50.128,344.04,111.745,344.04z M105.25,135.775h43.083v-15h-35.209
    c3.443-19.029,20.119-33.513,40.125-33.513c7.144,0,14.182,1.884,20.354,5.448l7.699,4.446l3.085-8.338
    C200.728,44.666,243.349,15,290.444,15c62.336,0,113.05,50.714,113.05,113.05l-0.025,7.317l6.755,0.691
    c49.47,5.06,86.776,46.433,86.776,96.237c0,53.345-43.399,96.745-96.745,96.745h-288.51C58.399,329.04,15,285.641,15,232.295
    C15,181.486,54.626,139.129,105.25,135.775z"/>
      <g>
        <path style={{ fill: '#FFFFFF' }} s d="M487,232.295h-15c0,4.539-0.428,9.08-1.272,13.498l14.733,2.815
      C486.482,243.265,487,237.776,487,232.295z"/>
        <path style={{ fill: '#FFFFFF' }} s d="M482.726,259.214l-14.257-4.664c-1.402,4.285-3.225,8.464-5.419,12.42l13.118,7.274
      C478.822,269.458,481.028,264.401,482.726,259.214z"/>
        <path style={{ fill: '#FFFFFF' }} s d="M470.271,283.457l-12.101-8.864c-13.507,18.439-35.158,29.447-57.915,29.447v15
      C427.775,319.04,453.95,305.738,470.271,283.457z"/>
      </g>
      <path d="M0,488.094L23.906,512h464.188L512,488.094v-98.773H0V488.094z M15,404.321h482v77.56L481.88,497H30.12L15,481.88V404.321z"
      />
      <g>
        <rect x="353.5" y="414.32" style={{ fill: '#FFFFFF' }} s width="76" height="15" />
        <rect x="439.5" y="414.32" style={{ fill: '#FFFFFF' }} s width="15" height="15" />
        <rect x="464.5" y="414.32" style={{ fill: '#FFFFFF' }} s width="15" height="15" />
      </g>
      <path d="M136.662,480.526c16.468,0,29.866-13.398,29.866-29.866s-13.398-29.866-29.866-29.866s-29.866,13.397-29.866,29.866
    S120.194,480.526,136.662,480.526z M136.662,435.794c8.197,0,14.866,6.669,14.866,14.866s-6.669,14.866-14.866,14.866
    c-8.197,0-14.866-6.669-14.866-14.866C121.796,442.463,128.465,435.794,136.662,435.794z"/>
      <path d="M205.395,480.526c16.468,0,29.866-13.398,29.866-29.866s-13.398-29.866-29.866-29.866s-29.866,13.397-29.866,29.866
    S188.926,480.526,205.395,480.526z M205.395,435.794c8.197,0,14.866,6.669,14.866,14.866s-6.669,14.866-14.866,14.866
    c-8.197,0-14.866-6.669-14.866-14.866S197.198,435.794,205.395,435.794z"/>
      <path d="M67.929,480.526c16.468,0,29.866-13.398,29.866-29.866s-13.397-29.866-29.866-29.866s-29.866,13.397-29.866,29.866
    S51.46,480.526,67.929,480.526z M67.929,435.794c8.197,0,14.866,6.669,14.866,14.866s-6.669,14.866-14.866,14.866
    s-14.866-6.669-14.866-14.866S59.731,435.794,67.929,435.794z"/>
      <rect x="259.13" y="443.16" width="15" height="15" />
      <rect x="309.13" y="443.16" width="15" height="15" />
      <rect x="284.13" y="443.16" width="15" height="15" />
      <rect x="227" y="351.54" width="15" height="30.28" />
      <rect x="270" y="351.54" width="15" height="30.28" />
      <g>
        <path style={{ fill: '#FFFFFF' }} s d="M378.494,127.959l15-0.017c-0.04-36.584-19.796-70.738-51.559-89.132l-7.518,12.98
      C361.571,67.515,378.46,96.701,378.494,127.959z"/>
        <path style={{ fill: '#FFFFFF' }} s d="M306.543,26.256c-5.292-0.833-10.708-1.256-16.1-1.256v15c4.612,0,9.243,0.361,13.766,1.074
      L306.543,26.256z"/>
        <path style={{ fill: '#FFFFFF' }} s d="M332.336,33.904c-4.918-2.197-10.047-4.017-15.244-5.409l-3.882,14.489
      c4.435,1.188,8.812,2.741,13.008,4.615L332.336,33.904z"/>
      </g>
      <path d="M111.745,319.04v-15C72.185,304.04,40,271.855,40,232.295H25C25,280.126,63.914,319.04,111.745,319.04z" />
      <rect x="15" y="318.21" width="15" height="15" />
      <rect x="15" y="368.21" width="15" height="15" />
      <rect x="15" y="343.21" width="15" height="15" />
      <rect x="481.99" y="318.21" width="15" height="15" />
      <rect x="481.99" y="343.21" width="15" height="15" />
      <rect x="481.99" y="368.21" width="15" height="15" />
      <rect x="248.5" y="354" width="15" height="25.667" />
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
    </svg>
  )

  const emergingTechnologiesSvg = (
    <svg className="svg-inline--fa fa-laptop fa-w-20 fa-stack-1x fa-inverse" id="_x33_0" enableBackground="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m55 2 5 8h-2v17h-6v-.46-11.54-2-3h-2z" fill="#b4dd7f" /></g><g><path d="m9 38 5 8h-2v17h-6v-6-2-9h-2z" fill="#b4dd7f" /></g><g><path d="m49.23 36.28c.67-1.08 1.23-2.23 1.66-3.43.15.09.3.16.46.23 1.23.51 2.64.35 3.72-.43l.12-.09 4.25 4.25-.09.12c-.48.66-.72 1.45-.72 2.24 0 .5.09 1.01.29 1.48.51 1.23 1.62 2.11 2.93 2.33l.15.02v6l-.15.03c-1.31.21-2.42 1.09-2.93 2.32s-.35 2.64.43 3.72l.09.12-4.25 4.24-.12-.08c-.66-.48-1.45-.72-2.24-.72-.5 0-1.01.09-1.48.29-1.23.51-2.11 1.62-2.33 2.93l-.02.15h-6l-.03-.16c-.21-1.3-1.09-2.41-2.32-2.92-.7-.28-1.45-.36-2.17-.23.95-1.32 1.52-2.94 1.52-4.69 1.67 1.26 3.75 2 6 2 5.52 0 10-4.48 10-10 0-4.44-2.89-8.2-6.9-9.51h-.01c.05-.07.1-.14.14-.21z" fill="#ffc729" /></g><g><path d="m12.67 21.6-.67 4.94c0 .13 0 .27.01.4h-.01c0-.78-.47-1.48-1.2-1.78-.01 0-.01-.01-.02-.01-.72-.3-1.55-.14-2.1.41l-.75.75-4.24-4.24.75-.75c.55-.55.71-1.38.41-2.1 0-.01-.01-.01-.01-.02-.3-.73-1-1.2-1.78-1.2h-1.06v-6h1.06c.78 0 1.48-.47 1.78-1.2 0-.01.01-.01.01-.02.3-.72.14-1.55-.41-2.1l-.75-.75 4.24-4.24.75.75c.55.55 1.38.71 2.1.41.01 0 .01-.01.02-.01.73-.3 1.2-1 1.2-1.78v-1.06h6v1.06c0 .78.47 1.48 1.2 1.78.01 0 .01.01.02.01.72.3 1.55.14 2.1-.41l.75-.75 4.24 4.24-.75.75c-1.76.49-3.41 1.23-4.92 2.19v-.01c-1.27-1.73-3.33-2.86-5.64-2.86-3.86 0-7 3.14-7 7 0 3.04 1.95 5.64 4.67 6.6z" fill="#ffc729" /></g><g><path d="m20.64 10.86v.01c-1.13.71-2.18 1.54-3.13 2.48-.54-.81-1.46-1.35-2.51-1.35-1.65 0-3 1.35-3 3 0 1.36.91 2.51 2.15 2.88-.63 1.17-1.12 2.42-1.48 3.72-2.72-.96-4.67-3.56-4.67-6.6 0-3.86 3.14-7 7-7 2.31 0 4.37 1.13 5.64 2.86z" fill="#fcd770" /></g><g><path d="m40 46c0 3.31 2.69 6 6 6s6-2.69 6-6c0-3.24-2.57-5.89-5.79-6l-.01-.01c1.11-1.04 2.08-2.22 2.89-3.5h.01c4.01 1.31 6.9 5.07 6.9 9.51 0 5.52-4.48 10-10 10-2.25 0-4.33-.74-6-2v-1c0-.55-.45-1-1-1h-1v-4h1c.55 0 1-.45 1-1z" fill="#fcd770" /></g><g><path d="m40 53v1c0 1.75-.57 3.37-1.52 4.69-.25.34-.52.67-.82.97-1.45 1.44-3.45 2.34-5.66 2.34-4.42 0-8-3.58-8-8v-1c0-.55.45-1 1-1h1 12 1c.55 0 1 .45 1 1z" fill="#aab2bd" /></g><g><path d="m38 48v4h-12v-4h4 4z" fill="#ccd1d9" /></g><g><path d="m40 46v1c0 .55-.45 1-1 1h-1-4v-10h-4v10h-4-1c-.55 0-1-.45-1-1v-3-8h-4v5.78c-4.86-3.35-7.87-8.86-7.99-14.84-.01-.13-.01-.27-.01-.4l.67-4.94c.36-1.3.85-2.55 1.48-3.72.87-1.65 1.98-3.15 3.28-4.45.03-.03.05-.05.08-.08.95-.94 2-1.77 3.13-2.48 1.51-.96 3.16-1.7 4.92-2.19 1.58-.44 3.26-.68 4.98-.68h2.92c10.24 0 18.54 8.3 18.54 18.54 0 2.19-.39 4.32-1.11 6.31-.43 1.2-.99 2.35-1.66 3.43-.04.07-.09.14-.14.21-.81 1.28-1.78 2.46-2.89 3.5-.68.66-1.42 1.26-2.2 1.79v-13.78h-4v16z" fill="#ffeaa7" /></g><g><path d="m42 16c2.21 0 4 1.79 4 4s-1.79 4-4 4c-1.1 0-2.1-.45-2.83-1.17-.72-.73-1.17-1.73-1.17-2.83 0-2.21 1.79-4 4-4z" fill="#ff826e" /></g><g><path d="m34.83 27.17c.72.73 1.17 1.73 1.17 2.83 0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c1.1 0 2.1.45 2.83 1.17z" fill="#ff826e" /></g><g><circle cx="22" cy="30" fill="#ff826e" r="2" /></g><g><path d="m44 41.78v.01c-.71.49-1.46.94-2.25 1.33l-1.75.88v-16h4z" fill="#e6e9ed" /></g><g><path d="m30 38h4v10h-4z" fill="#e6e9ed" /></g><g><path d="m24 36v8l-1.75-.88c-.79-.39-1.54-.84-2.25-1.33v-.01-5.78z" fill="#e6e9ed" /></g></g><g><circle cx="32" cy="30" r="1" /><path d="m32 35c2.757 0 5-2.243 5-5 0-1.017-.309-1.963-.833-2.753l3.08-3.08c.791.524 1.736.833 2.753.833 2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5c0 1.017.309 1.962.833 2.753l-3.08 3.08c-.791-.524-1.736-.833-2.753-.833-2.414 0-4.434 1.721-4.899 4h-2.285c-.414-1.161-1.514-2-2.816-2-1.654 0-3 1.346-3 3s1.346 3 3 3c1.302 0 2.402-.839 2.816-2h2.285c.465 2.279 2.485 4 4.899 4zm10-18c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm-10 10c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm-10 4c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1z" /><circle cx="42" cy="20" r="1" /><path d="m2.195 47h2.805v17h8v-17h2.805l-6.805-10.887zm8.805-2v17h-4v-17h-1.195l3.195-5.113 3.195 5.113z" /><path d="m62.015 41.989c-.978-.163-1.789-.808-2.169-1.725-.379-.916-.261-1.945.315-2.752l.58-.812-5.44-5.441-.813.581c-.69.492-1.539.627-2.342.426.417-1.372.691-2.799.798-4.266h6.056v-17h2.805l-6.805-10.887-6.805 10.887h2.805v6.984c-3.18-6.492-9.837-10.984-17.541-10.984h-2.918c-1.169 0-2.309.122-3.422.319l-5.047-5.047-1.459 1.458c-.264.264-.658.338-1.035.184-.351-.143-.578-.477-.578-.851v-2.063h-8v2.063c0 .374-.227.708-.603.862-.351.145-.747.068-1.009-.195l-1.459-1.458-5.657 5.656 1.458 1.46c.264.264.34.659.185 1.035-.144.35-.478.577-.852.577h-2.063v8h2.063c.373 0 .707.227.862.604.145.349.068.745-.196 1.009l-1.457 1.459 5.656 5.656 1.459-1.458c.264-.263.658-.339 1.035-.184.351.143.578.477.578.851h.014c.145 7.289 4.244 13.81 10.788 17.082l1.198.599v2.382c0 1.103.897 2 2 2v2c-1.103 0-2 .897-2 2v1c0 4.962 4.037 9 9 9 2.828 0 5.353-1.314 7.004-3.361.432-.026.864.043 1.267.209.913.378 1.555 1.185 1.717 2.162l.166.99h7.695l.161-.984c.163-.979.808-1.79 1.726-2.169.914-.379 1.944-.263 2.752.315l.813.58 5.441-5.441-.579-.81c-.578-.809-.695-1.84-.315-2.759.379-.915 1.188-1.558 2.162-1.72l.99-.164v-7.695zm-23.015 9.011v-2c.222 0 .432-.045.631-.112 1.103 2.421 3.54 4.112 6.369 4.112 3.859 0 7-3.14 7-7 0-3.102-1.987-5.72-4.782-6.643.459-.527.891-1.075 1.29-1.647 3.314 1.397 5.492 4.638 5.492 8.29 0 4.962-4.037 9-9 9-1.803 0-3.519-.529-5-1.523v-.477c0-1.103-.897-2-2-2zm4-9.749c-.545.352-1.106.684-1.696.979l-.304.152v-13.382h2zm-2 3.367 1.198-.599c1.607-.804 3.064-1.807 4.355-2.966 2.519.277 4.447 2.368 4.447 4.947 0 2.757-2.243 5-5 5s-5-2.243-5-5zm14-40.731 3.195 5.113h-1.195v17h-4v-17h-1.195zm-47.026 20.967-.045.045-2.828-2.829.044-.044c.838-.837 1.085-2.089.62-3.209-.453-1.104-1.514-1.817-2.702-1.817h-.063v-4h.063c1.188 0 2.248-.713 2.71-1.838.456-1.099.209-2.351-.628-3.188l-.044-.045 2.828-2.829.045.044c.837.837 2.087 1.082 3.209.62 1.104-.452 1.817-1.513 1.817-2.701v-.063h4v.063c0 1.188.713 2.249 1.839 2.711 1.101.455 2.352.208 3.188-.628l.045-.045 2.756 2.756c-1.391.426-2.71 1.013-3.951 1.723-1.506-1.628-3.643-2.58-5.877-2.58-4.411 0-8 3.589-8 8 0 3.078 1.785 5.849 4.509 7.176-.154.67-.276 1.352-.358 2.047-1.098-.449-2.343-.202-3.177.631zm5.799-8.295c-.47-.373-.773-.938-.773-1.559 0-1.103.897-2 2-2 .419 0 .81.143 1.142.377-.893.976-1.687 2.04-2.369 3.182zm3.81-4.605c-.713-.606-1.621-.954-2.583-.954-2.206 0-4 1.794-4 4 0 1.367.717 2.617 1.826 3.344-.284.612-.539 1.239-.76 1.883-1.865-1.05-3.066-3.038-3.066-5.227 0-3.309 2.691-6 6-6 1.557 0 3.046.624 4.156 1.691-.547.394-1.07.816-1.573 1.263zm5.113 30.276c-.59-.295-1.152-.628-1.696-.979v-4.251h2v5.382zm-3.696-7.23v4.749c-3.772-3.278-6-8.038-6-13.208 0-9.672 7.869-17.541 17.541-17.541h2.918c9.672 0 17.541 7.869 17.541 17.541 0 5.17-2.228 9.93-6 13.208v-12.749h-6v20h-4v-10h-6v10h-4v-12zm14 12h-2v-8h2zm-6 2h10v2h-10zm5 12c-3.859 0-7-3.14-7-7v-1h14v1c0 3.86-3.141 7-7 7zm29-12.797c-1.352.43-2.446 1.426-3 2.764-.555 1.339-.485 2.819.166 4.081l-3.118 3.117c-1.26-.652-2.739-.721-4.077-.167s-2.336 1.648-2.767 3.001h-4.407c-.429-1.351-1.424-2.446-2.762-3-.279-.116-.569-.194-.862-.256.295-.642.521-1.321.659-2.034 1.581.847 3.339 1.291 5.168 1.291 6.065 0 11-4.935 11-11 0-4.357-2.541-8.23-6.431-10.001.327-.592.624-1.201.888-1.827 1.203.357 2.482.235 3.591-.337l3.117 3.117c-.651 1.26-.721 2.74-.167 4.078.555 1.339 1.65 2.336 3.002 2.767z" /></g></g></svg>
  )

  return (
    <div>
      <NavBar />
      <Header />
      {/* <!-- Services--> */}
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row text-center">
            <div className="col-md-3">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                {/* <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i> */}
                {/* <img src="assets/img/coding.svg  " alt="..." /> */}
                {codingSvg}
              </span>
              <h4 className="my-3">E-Commerce</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
                architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-3">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                {cyberSecuritySvg}
                {/* <i className="fas fa-laptop fa-stack-1x fa-inverse"></i> */}
              </span>
              <h4 className="my-3">Responsive Design</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
                architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-3">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                {/* <i className="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                {cloudSeverSvg}
              </span>
              <h4 className="my-3">Web Security</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
                architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-3">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                {/* <i className="fas fa-lock fa-stack-1x fa-inverse"></i> */}
                {emergingTechnologiesSvg}
              </span>
              <h4 className="my-3">Web Security</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
                architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>

        </div>
      </section >
      {/* <!-- Portfolio Grid--> */}
      < section className="page-section bg-light" id="portfolio" >
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* <!-- Portfolio item 1--> */}
              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Threads</div>
                  <div className="portfolio-caption-subheading text-muted">Illustration</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* <!-- Portfolio item 2--> */}
              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="assets/img/portfolio/2.jpg" alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Explore</div>
                  <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* <!-- Portfolio item 3--> */}
              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="assets/img/portfolio/3.jpg" alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Finish</div>
                  <div className="portfolio-caption-subheading text-muted">Identity</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              {/* <!-- Portfolio item 4--> */}
              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="assets/img/portfolio/4.jpg" alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Lines</div>
                  <div className="portfolio-caption-subheading text-muted">Branding</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              {/* <!-- Portfolio item 5--> */}
              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="assets/img/portfolio/5.jpg" alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Southwest</div>
                  <div className="portfolio-caption-subheading text-muted">Website Design</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* <!-- Portfolio item 6--> */}
              <div className="portfolio-item">
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                  </div>
                  <img className="img-fluid" src="assets/img/portfolio/6.jpg" alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Window</div>
                  <div className="portfolio-caption-subheading text-muted">Photography</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* <!-- About--> */}
      < section className="page-section" id="about" >
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg"
                alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                    voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                    unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg"
                alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                    voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                    unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg"
                alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2015</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                    voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                    unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg"
                alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2020</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
                    voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero
                    unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section >
      {/* <!-- Team--> */}
      < section className="page-section bg-light" id="team" >
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
                <h4>Parveen Anand</h4>
                <p className="text-muted">Lead Designer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
                <h4>Diana Petersen</h4>
                <p className="text-muted">Lead Marketer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                <h4>Larry Parker</h4>
                <p className="text-muted">Lead Developer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
                laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
            </div>
          </div>
        </div>
      </section >
      {/* <!-- Clients--> */}
      < div className="py-5" >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg"
                alt="..." /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg"
                alt="..." /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg"
                alt="..." /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg"
                alt="..." /></a>
            </div>
          </div>
        </div>
      </div >
      {/* <!-- Contact--> */}
      < section className="page-section" id="contact" >
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          {/* <!-- * * * * * * * * * * * * * * *--> */}
          {/* <!-- * * SB Forms Contact Form * *--> */}
          {/* <!-- * * * * * * * * * * * * * * *--> */}
          {/* <!-- This form is pre-integrated with SB Forms.--> */}
          {/* <!-- To make this form functional, sign up at--> */}
          {/* <!-- https://startbootstrap.com/solution/contact-forms--> */}
          {/* <!-- to get an API token!--> */}
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  {/* <!-- Name input--> */}
                  <input className="form-control" id="name" type="text" placeholder="Your Name *"
                    data-sb-validations="required" />
                  <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                </div>
                <div className="form-group">
                  {/* <!-- Email address input--> */}
                  <input className="form-control" id="email" type="email" placeholder="Your Email *"
                    data-sb-validations="required,email" />
                  <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                </div>
                <div className="form-group mb-md-0">
                  {/* <!-- Phone number input--> */}
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *"
                    data-sb-validations="required" />
                  <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  {/* <!-- Message input--> */}
                  <textarea className="form-control" id="message" placeholder="Your Message *"
                    data-sb-validations="required"></textarea>
                  <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Submit success message--> */}
            {/* <!----> */}
            {/* <!-- This is what your users will see when the form--> */}
            {/* <!-- has successfully submitted--> */}
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center text-white mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a
                  href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
              </div>
            </div>
            {/* <!-- Submit error message--> */}
            {/* <!----> */}
            {/* <!-- This is what your users will see when there is--> */}
            {/* <!-- an error submitting the form--> */}
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">Error sending message!</div>
            </div>
            {/* <!-- Submit Button--> */}
            <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled"
              id="submitButton" type="submit">Send Message</button></div>
          </form>
        </div>
      </section >
      <Footer />
      {/* <!-- Portfolio Modals--> */}
      {/* <!-- Portfolio item 1 modal popup--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
              alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                      repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                      nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Threads
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Illustration
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                      type="button">
                      <i className="fas fa-times me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio item 2 modal popup--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
              alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                      repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                      nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Explore
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Graphic Design
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                      type="button">
                      <i className="fas fa-times me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio item 3 modal popup--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
              alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                      repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                      nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Finish
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Identity
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                      type="button">
                      <i className="fas fa-times me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio item 4 modal popup--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
              alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                      repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                      nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Lines
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Branding
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                      type="button">
                      <i className="fas fa-times me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio item 5 modal popup--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
              alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                      repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                      nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Southwest
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Website Design
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                      type="button">
                      <i className="fas fa-times me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio item 6 modal popup--> */}
      <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg"
              alt="Close modal" /></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* <!-- Project details--> */}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." />
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt
                      repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae,
                      nostrum, reiciendis facere nemo!</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Window
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Photography
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                      type="button">
                      <i className="fas fa-times me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;


