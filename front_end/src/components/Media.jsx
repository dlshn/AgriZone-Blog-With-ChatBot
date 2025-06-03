import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MediaPage.css";

const VideoGallery = () => {
  // Your videos array - can mix regular videos and Shorts
  const videos = [
    { 
      id: 'jL05UbRHZtk&t=102s', // Replace with your regular video ID
      title: 'Full Tutorial: Organic Composting',
      isShort: false
    },
    { 
      id: 'cKJqm5BrYrc&t=75s', 
      title: 'Greenhouse Setup Guide',
      isShort: false
    },
    { 
      id: 'pxJ3y8IAHOU', 
      title: 'Greenhouse Setup Guide',
      isShort: false
    },
    { 
      id: 'TZ-DCaiWAYU', // Replace with your Shorts ID
      title: 'Quick Tip: Seed Planting',
      isShort: true
    },
    { 
      id: 'S1xyhtDDXYU', 
      title: 'Pest Control Hack',
      isShort: true
    },
    { 
      id: 'm7U1yzqgpPU', // Replace with your Shorts ID
      title: 'Quick Tip: Seed Planting',
      isShort: true
      
    },
    { 
      id: '9B6kGQjB5Xc', 
      title: 'Pest Control Hack',
      isShort: true
    },
    // Add more videos as needed
  ];

  return (
    <div className="video-gallery-container">
      <div className="container py-5">
        <h1 className="text-center text-success mb-5">
          <FaYoutube className="me-2" /> AgriZone Video Gallery
        </h1>
        
        <div className="row g-4">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className={video.isShort ? "col-6 col-md-4 col-lg-3" : "col-12 col-md-6 col-lg-4"}
            >
              <div className="video-card">
                <div className={`ratio ${video.isShort ? "ratio-9x16" : "ratio-16x9"}`}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h5 className="video-title mt-3">{video.title}</h5>
                <div className="badge bg-secondary mb-2">
                  {video.isShort ? 'SHORT' : 'FULL VIDEO'}
                </div>
                <a
                  href={`https://youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-danger btn-sm mt-2"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;