// Saves options to chrome.storage
function save_options() {
  var level = document.getElementById('level').value;
  chrome.storage.sync.set({
    selectedLevel: level
  }, function () {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value level = 'N3'
  chrome.storage.sync.get({
    selectedLevel: 'N3'
  }, function (items) {
    document.getElementById('level').value = items.selectedLevel;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);