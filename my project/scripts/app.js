/* -------------------------------------------------------------------------- */
/*  Task 4 — JavaScript Data, Functions & Console                             */
/* -------------------------------------------------------------------------- */

// 1. Constants Defined at the very top
const TODAY = new Date("2026-07-05"); // Defined statically as current assignment state date reference
const MS_IN_A_DAY = 86400000;         // Number of milliseconds in exactly one single day

// 2. Parallel Arrays with exactly 4 elements matching respective indexes
const courseNames = [
    "Frontend Mastery", 
    "Advanced JavaScript", 
    "Responsive Layouts", 
    "NodeJS Fundamentals"
];

const courseStatuses = [
    "Open Now", 
    "Coming Soon", 
    "Open Soon", 
    "Closed"
];

const courseLaunchDates = [
    "2026-07-01",  // Past date relative to today -> negative days
    "2026-07-15",  // Future launch -> positive days
    "2026-07-05",  // Same day -> zero days
    "2026-06-20"   // Past date -> negative days
];

// 3. daysLeft() Function Definition
function daysLeft(isoDateString) {
    const targetDate = new Date(isoDateString);
    
    // Clear hour/time parameters to maintain purely strict calendar dates calculations
    targetDate.setHours(0,0,0,0);
    const currentDateRef = new Date(TODAY);
    currentDateRef.setHours(0,0,0,0);
    
    const timeDifference = targetDate.getTime() - currentDateRef.getTime();
    // Mathematical division returning correct integer values for positive/negative conditions
    return Math.round(timeDifference / MS_IN_A_DAY);
}

// 4. daysLabel() Function Definition
function daysLabel(daysCount) {
    if (daysCount > 0) {
        return `${daysCount} days left`;
    } else if (daysCount === 0) {
        return "Launching today";
    } else {
        return `Already launched ${Math.abs(daysCount)} days ago`;
    }
}

// 5. filterByStatus() Function Definition
function filterByStatus(statusString) {
    const matchedCourses = [];
    for (let i = 0; i < courseStatuses.length; i++) {
        // Strict case-sensitive match criteria
        if (courseStatuses[i] === statusString) {
            matchedCourses.push(courseNames[i]);
        }
    }
    return matchedCourses;
}

// 6. Loop All Courses Console Output Routine Run Execution
function loopAllCoursesConsoleOutput() {
    console.log("==================================================");
    console.log("       DIGITAL EGYPT CUBS - COURSES REPORT        ");
    console.log("==================================================");
    
    for (let i = 0; i < courseNames.length; i++) {
        const currentName = courseNames[i];
        const currentStatus = courseStatuses[i];
        const currentLaunchDate = courseLaunchDates[i];
        
        // Compute functions calculations
        const computedDaysRemaining = daysLeft(currentLaunchDate);
        const readableLabel = daysLabel(computedDaysRemaining);
        
        // Log individual clear line details inside console interface cleanly
        console.log(`Course: "${currentName}" | Status: [${currentStatus}] | Timing: ${readableLabel}`);
    }
    console.log("==================================================");
}

// Execute logic immediately upon file setup load parse operation
loopAllCoursesConsoleOutput();