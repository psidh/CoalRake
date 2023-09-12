import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Chart from 'chart.js/auto';

function Example() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    AOS.init({
      delay: 100,
      offset: 100,
      duration: 600,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');

    if (!ctx) return;

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Day 1', 'Day 2', 'Day 3'],
        datasets: [
          {
            data: [6, 10, 12],
            label: 'Contributions',
            borderColor: '#00cc00',
            borderWidth: 4,
            backgroundColor: 'rgba(0, 204, 0, 0.3)',
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
            title: {
              display: true,
              text: 'Timeline',
            },
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.4)',
            },
            title: {
              display: true,
              text: 'Contributions',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        maintainAspectRatio: true,
      },
    });
  }, []);

  return (
    <div
      className="container mx-auto pt-4 pb-8 px-6 md:px-16 md:py-10"
      data-aos="fade-in"
    >
      <h1 className="md:text-4xl text-3xl font-semibold my-4 text-center md:text-left text-white">
        Consistency
      </h1>
      <div className="my-4">
        <div className="rounded-xl p-4 sm:p-8">
          <canvas
            ref={chartRef}
            width={800}
            height={400}
            className="w-full h-auto"
          ></canvas>
        </div>
      </div>
    </div>
  );
}

export default Example;
