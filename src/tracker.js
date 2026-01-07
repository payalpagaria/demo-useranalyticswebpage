const API_URL = "https://useranalytics-1gzm.onrender.com/api/events";

export function getSessionId() {
  let sessionId = localStorage.getItem("session_id");
  if (!sessionId) {
    sessionId = "sess_" + Math.random().toString(36).substring(2, 10);
    localStorage.setItem("session_id", sessionId);
  }
  return sessionId;
}

export function trackPageView() {
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      session_id: getSessionId(),
      event_type: "page_view",
      page_url: window.location.pathname,
      timestamp: new Date().toISOString()
    })
  }).catch(() => {});
}

export function trackClick(event) {
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      session_id: getSessionId(),
      event_type: "click",
      page_url: window.location.pathname,
      timestamp: new Date().toISOString(),
      click_coordinates: {
        x: event.clientX,
        y: event.clientY
      }
    })
  }).catch(() => {});
}
