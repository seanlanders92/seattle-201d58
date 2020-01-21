# Class 12

## Chart JS and HTML canvas

- 3rd party library, used for quickly data vizualizations.
- Installed using a CDN: content delivery
  - A computer serving files through a URL.
  - A `<script>` tag can take a url as a src and run the JS that lives there.

```html
// index.html
<head>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
</head>
```

## HTML canvas

- An element in HTML 5, that allows users to draw graphics.

```html
<body>
  <canvas id="whiteboard">
</body>
``` 

```js
var canvas = document.getElementById('whiteboard');
var ctx = canvas.getContext('2d');
```

## applying Chart JS

```js
var ctx = document.getElementById('my-chart').getContext('2d');

var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
       ],
       borderColor: [
         'rgba(255, 99, 132, 1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
       ],
       borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
```
