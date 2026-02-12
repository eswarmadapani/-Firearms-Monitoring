// Mock Data for AI Surveillance Dashboard

// Detection Results
const mockDetections = [
  {
    id: 1,
    type: 'Firearm',
    confidence: 94.7,
    timestamp: '2026-02-12 13:45:22',
    threat: true,
    location: { x: 120, y: 80, width: 150, height: 200 }
  },
  {
    id: 2,
    type: 'Face',
    confidence: 87.3,
    timestamp: '2026-02-12 13:45:22',
    threat: false,
    location: { x: 300, y: 50, width: 120, height: 140 }
  },
  {
    id: 3,
    type: 'Vehicle',
    confidence: 91.2,
    timestamp: '2026-02-12 13:45:23',
    threat: false,
    location: { x: 450, y: 250, width: 200, height: 150 }
  }
];

// Analytics Stats
const analyticsStats = {
  totalScans: 1247,
  threatsDetected: 38,
  averageAccuracy: 92.4,
  activeAlerts: 3
};

// Chart Data - Detection Trends (Last 7 Days)
const detectionTrendsData = {
  labels: ['Feb 6', 'Feb 7', 'Feb 8', 'Feb 9', 'Feb 10', 'Feb 11', 'Feb 12'],
  datasets: [{
    label: 'Total Detections',
    data: [45, 52, 38, 61, 49, 55, 67],
    borderColor: '#00d4ff',
    backgroundColor: 'rgba(0, 212, 255, 0.1)',
    tension: 0.4,
    fill: true
  }, {
    label: 'Threats',
    data: [2, 5, 1, 7, 3, 4, 6],
    borderColor: '#ff4757',
    backgroundColor: 'rgba(255, 71, 87, 0.1)',
    tension: 0.4,
    fill: true
  }]
};

// Detection Types Breakdown
const detectionTypesData = {
  labels: ['Firearms', 'Faces', 'Vehicles', 'Suspicious Objects', 'Other'],
  datasets: [{
    data: [38, 542, 387, 156, 124],
    backgroundColor: [
      'rgba(255, 71, 87, 0.8)',
      'rgba(0, 212, 255, 0.8)',
      'rgba(46, 213, 115, 0.8)',
      'rgba(255, 165, 2, 0.8)',
      'rgba(160, 174, 192, 0.8)'
    ],
    borderColor: [
      '#ff4757',
      '#00d4ff',
      '#2ed573',
      '#ffa502',
      '#a0aec0'
    ],
    borderWidth: 2
  }]
};

// Hourly Detection Patterns
const hourlyPatternsData = {
  labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
  datasets: [{
    label: 'Detections',
    data: [12, 8, 35, 47, 52, 28],
    backgroundColor: 'rgba(0, 212, 255, 0.6)',
    borderColor: '#00d4ff',
    borderWidth: 2
  }]
};

// Detection Logs
const detectionLogs = [
  { id: 1, datetime: '2026-02-12 13:45:22', type: 'Firearm', confidence: 94.7, status: 'threat', camera: 'Cam-001' },
  { id: 2, datetime: '2026-02-12 13:42:15', type: 'Face', confidence: 89.3, status: 'safe', camera: 'Cam-002' },
  { id: 3, datetime: '2026-02-12 13:38:47', type: 'Vehicle', confidence: 91.2, status: 'safe', camera: 'Cam-003' },
  { id: 4, datetime: '2026-02-12 13:35:33', type: 'Suspicious Object', confidence: 78.5, status: 'warning', camera: 'Cam-001' },
  { id: 5, datetime: '2026-02-12 13:30:19', type: 'Face', confidence: 92.1, status: 'safe', camera: 'Cam-004' },
  { id: 6, datetime: '2026-02-12 13:25:08', type: 'Firearm', confidence: 96.3, status: 'threat', camera: 'Cam-002' },
  { id: 7, datetime: '2026-02-12 13:18:42', type: 'Vehicle', confidence: 88.7, status: 'safe', camera: 'Cam-005' },
  { id: 8, datetime: '2026-02-12 13:12:55', type: 'Face', confidence: 85.9, status: 'safe', camera: 'Cam-001' },
  { id: 9, datetime: '2026-02-12 13:08:27', type: 'Suspicious Object', confidence: 82.4, status: 'warning', camera: 'Cam-003' },
  { id: 10, datetime: '2026-02-12 13:02:14', type: 'Face', confidence: 90.6, status: 'safe', camera: 'Cam-002' },
  { id: 11, datetime: '2026-02-12 12:58:39', type: 'Firearm', confidence: 93.8, status: 'threat', camera: 'Cam-004' },
  { id: 12, datetime: '2026-02-12 12:52:11', type: 'Vehicle', confidence: 87.2, status: 'safe', camera: 'Cam-001' },
  { id: 13, datetime: '2026-02-12 12:45:33', type: 'Face', confidence: 91.5, status: 'safe', camera: 'Cam-003' },
  { id: 14, datetime: '2026-02-12 12:38:56', type: 'Suspicious Object', confidence: 76.8, status: 'warning', camera: 'Cam-005' },
  { id: 15, datetime: '2026-02-12 12:31:22', type: 'Face', confidence: 88.4, status: 'safe', camera: 'Cam-002' },
  { id: 16, datetime: '2026-02-12 12:24:47', type: 'Vehicle', confidence: 92.9, status: 'safe', camera: 'Cam-004' },
  { id: 17, datetime: '2026-02-12 12:18:05', type: 'Firearm', confidence: 95.1, status: 'threat', camera: 'Cam-001' },
  { id: 18, datetime: '2026-02-12 12:11:38', type: 'Face', confidence: 86.7, status: 'safe', camera: 'Cam-003' },
  { id: 19, datetime: '2026-02-12 12:05:19', type: 'Suspicious Object', confidence: 81.2, status: 'warning', camera: 'Cam-002' },
  { id: 20, datetime: '2026-02-12 11:58:44', type: 'Face', confidence: 89.9, status: 'safe', camera: 'Cam-005' },
  { id: 21, datetime: '2026-02-12 11:51:27', type: 'Vehicle', confidence: 90.3, status: 'safe', camera: 'Cam-001' },
  { id: 22, datetime: '2026-02-12 11:44:52', type: 'Face', confidence: 87.6, status: 'safe', camera: 'Cam-004' },
  { id: 23, datetime: '2026-02-12 11:37:15', type: 'Firearm', confidence: 97.2, status: 'threat', camera: 'Cam-002' },
  { id: 24, datetime: '2026-02-12 11:29:41', type: 'Suspicious Object', confidence: 79.5, status: 'warning', camera: 'Cam-003' },
  { id: 25, datetime: '2026-02-12 11:22:08', type: 'Face', confidence: 91.8, status: 'safe', camera: 'Cam-005' },
];

// Export all mock data
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    mockDetections,
    analyticsStats,
    detectionTrendsData,
    detectionTypesData,
    hourlyPatternsData,
    detectionLogs
  };
}
