// Home Page - Upload & Detection Logic

document.addEventListener('DOMContentLoaded', function () {
    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const imageBtn = document.getElementById('upload-image-btn');
    const videoBtn = document.getElementById('upload-video-btn');
    const previewSection = document.getElementById('preview-section');
    const previewContainer = document.getElementById('preview-container');
    const resultsSection = document.getElementById('results-section');
    const resultsContainer = document.getElementById('results-container');
    const analyzeBtn = document.getElementById('analyze-btn');

    let uploadedFile = null;

    // Upload Image Button
    imageBtn.addEventListener('click', () => {
        fileInput.accept = 'image/*';
        fileInput.click();
    });

    // Upload Video Button
    videoBtn.addEventListener('click', () => {
        fileInput.accept = 'video/*';
        fileInput.click();
    });

    // File Input Change
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            handleFile(file);
        }
    });

    // Drag & Drop Events
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('border-cyan-500', 'bg-cyan-500', 'bg-opacity-10');
    });

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-cyan-500', 'bg-cyan-500', 'bg-opacity-10');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-cyan-500', 'bg-cyan-500', 'bg-opacity-10');

        const file = e.dataTransfer.files[0];
        if (file) {
            handleFile(file);
        }
    });

    // Handle File Upload
    function handleFile(file) {
        uploadedFile = file;
        const fileType = file.type.split('/')[0];

        // Show preview
        previewSection.classList.remove('hidden');
        resultsSection.classList.add('hidden');

        if (fileType === 'image') {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewContainer.innerHTML = `
          <img src="${e.target.result}" alt="Preview" class="max-w-full max-h-96 rounded-lg mx-auto" id="preview-image">
        `;
            };
            reader.readAsDataURL(file);
        } else if (fileType === 'video') {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewContainer.innerHTML = `
          <video src="${e.target.result}" controls class="max-w-full max-h-96 rounded-lg mx-auto"></video>
        `;
            };
            reader.readAsDataURL(file);
        }

        // Show analyze button
        analyzeBtn.classList.remove('hidden');
    }

    // Analyze Button
    analyzeBtn.addEventListener('click', () => {
        simulateAnalysis();
    });

    // Simulate Analysis
    function simulateAnalysis() {
        // Hide analyze button, show loading
        analyzeBtn.classList.add('hidden');
        resultsSection.classList.remove('hidden');

        resultsContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center py-12">
        <svg class="animate-spin w-16 h-16 text-cyan-400 mb-4" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="text-xl font-semibold text-cyan-400 animate-pulse">Analyzing...</p>
        <p class="text-gray-400 mt-2">Processing with AI detection models</p>
      </div>
    `;

        // Simulate delay
        setTimeout(() => {
            displayResults();
        }, 2000);
    }

    // Display Results
    function displayResults() {
        const detections = mockDetections;
        const hasThreat = detections.some(d => d.threat);

        let html = `
      <!-- Overall Status -->
      <div class="mb-6 p-6 rounded-xl ${hasThreat ? 'bg-red-500 bg-opacity-10 border border-red-500' : 'bg-green-500 bg-opacity-10 border border-green-500'}">
        <div class="flex items-center gap-4">
          ${hasThreat ? `
            <svg class="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <div>
              <h3 class="text-2xl font-bold text-red-400">Threat Detected</h3>
              <p class="text-gray-300">Potential security risk identified</p>
            </div>
          ` : `
            <svg class="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 class="text-2xl font-bold text-green-400">All Clear</h3>
              <p class="text-gray-300">No threats detected in this scan</p>
            </div>
          `}
        </div>
      </div>
      
      <!-- Detection Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    `;

        detections.forEach((detection, index) => {
            const delay = index * 100;
            html += `
        <div class="card card-lift animate-fade-in" style="animation-delay: ${delay}ms; opacity: 0; animation-fill-mode: forwards;">
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-3">
              ${getDetectionIcon(detection.type)}
              <div>
                <h4 class="font-semibold text-white">${detection.type}</h4>
                <p class="text-xs text-gray-400">${detection.timestamp}</p>
              </div>
            </div>
            ${detection.threat
                    ? '<span class="badge badge-danger">Threat</span>'
                    : '<span class="badge badge-success">Safe</span>'
                }
          </div>
          
          <!-- Confidence Progress Ring -->
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <p class="text-sm text-gray-400 mb-1">Confidence</p>
              <div class="flex items-center gap-2">
                <div class="flex-1 bg-gray-700 rounded-full h-2">
                  <div class="h-2 rounded-full ${detection.threat ? 'bg-red-500' : 'bg-cyan-500'}" 
                       style="width: ${detection.confidence}%; transition: width 1s ease;"></div>
                </div>
                <span class="text-sm font-semibold ${detection.threat ? 'text-red-400' : 'text-cyan-400'}">
                  ${detection.confidence}%
                </span>
              </div>
            </div>
          </div>
        </div>
      `;
        });

        html += `
      </div>
      
      <!-- Actions -->
      <div class="mt-6 flex gap-4 justify-center">
        <button onclick="location.reload()" class="btn btn-secondary">
          <svg class="inline-block w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          Analyze Another
        </button>
        <a href="detection-logs.html" class="btn btn-primary">
          View All Logs
          <svg class="inline-block w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
      </div>
    `;

        resultsContainer.innerHTML = html;

        // Draw bounding boxes on preview image
        drawBoundingBoxes(detections);
    }

    // Get icon for detection type
    function getDetectionIcon(type) {
        const icons = {
            'Firearm': '<div class="w-10 h-10 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center text-red-400 text-xl">🔫</div>',
            'Face': '<div class="w-10 h-10 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center text-blue-400 text-xl">👤</div>',
            'Vehicle': '<div class="w-10 h-10 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center text-green-400 text-xl">🚗</div>',
        };
        return icons[type] || '<div class="w-10 h-10 rounded-full bg-gray-500 bg-opacity-20 flex items-center justify-center text-gray-400 text-xl">❓</div>';
    }

    // Draw bounding boxes on image
    function drawBoundingBoxes(detections) {
        const previewImage = document.getElementById('preview-image');
        if (!previewImage) return;

        // Create overlay canvas
        const container = previewImage.parentElement;
        container.style.position = 'relative';

        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.pointerEvents = 'none';

        detections.forEach(detection => {
            const box = document.createElement('div');
            box.style.position = 'absolute';
            box.style.left = `${(detection.location.x / 640) * 100}%`;
            box.style.top = `${(detection.location.y / 480) * 100}%`;
            box.style.width = `${(detection.location.width / 640) * 100}%`;
            box.style.height = `${(detection.location.height / 480) * 100}%`;
            box.style.border = `2px solid ${detection.threat ? '#ff4757' : '#00d4ff'}`;
            box.style.boxShadow = `0 0 10px ${detection.threat ? '#ff4757' : '#00d4ff'}`;

            const label = document.createElement('div');
            label.textContent = `${detection.type} ${detection.confidence}%`;
            label.style.position = 'absolute';
            label.style.top = '-24px';
            label.style.left = '0';
            label.style.background = detection.threat ? '#ff4757' : '#00d4ff';
            label.style.color = '#fff';
            label.style.padding = '2px 8px';
            label.style.borderRadius = '4px';
            label.style.fontSize = '12px';
            label.style.fontWeight = '600';
            label.style.whiteSpace = 'nowrap';

            box.appendChild(label);
            overlay.appendChild(box);
        });

        container.appendChild(overlay);
    }
});
