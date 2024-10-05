import "./App.css";
import "./Style/Style.css";
import NavBar from "./LandingPage/NavBar";
import Home from "./LandingPage/Home";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import JobPostDetail from "./JobPost/JobpostDetail";
import JobPostScreen from "./JobPost/JobPostScreen";
import Homelogin from "./LandingPage/Homelogin";
import JobPostScreenSub from "./JobPost/JobPostScreenSub";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DSAHome from "./Learning/DSA/DSAHome";
import ArrayPage from "./Learning/DSA/ArrayPage";
import LinearSearch from "./Learning/DSA/LinearSearch";
import BinarySearch from "./Learning/DSA/BinarySearch";
import LearningDefault from "./Learning/LearningDefault";
import SelectionSort from "./Learning/DSA/SelectionSort";
import BubbleSort from "./Learning/DSA/BubbleSort";
import InsertionSort from "./Learning/DSA/InsertionSort";
import MergeSort from "./Learning/DSA/MergeSort";
import QuickSort from "./Learning/DSA/QuickSort";
import HeapSort from "./Learning/DSA/HeapSort";
import RadixSort from "./Learning/DSA/RadixSort";
import CountingSort from "./Learning/DSA/CountingSort";
import { StateContext } from "./context";
import NotAuthorize from "./Components/NotAuthorize";
import ViewJobs from "./JobPost/ViewJobs";
import Profile from "./Components/Profile";
import Setting from "./Components/setting";
import Saved from "./Components/Saved";
import Wordtopdf from "./Converter/Wordtopdf";
import AddJobRoles from "./JobPost/Masters/AddJobRoles";
import MasterAddSkills from "./JobPost/Masters/MasterAddSkills";
import JAVA_Preparation from "./Learning/InterviewQA/JAVA_Preparation";
import JavaMiscellaneous from "./Learning/InterviewQA/JavaMiscellaneous";
import DBMS_Preparation from "./Learning/InterviewQA/DBMS_Preparation";



function App() {
  return (
    <StateContext>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/JobPostScreen" element={<JobPostScreen />} />
            <Route path="/ViewJobs" element={<ViewJobs />} />
            <Route path="/ViewJobs/:jobid" element={<ViewJobs />} />
            <Route path="/JobpostDetail" element={<JobPostDetail />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/DSAHome" element={<DSAHome />} />
            <Route path="/Homelogin" element={<Homelogin />} />
            <Route path="/NotAuthorize" element={<NotAuthorize />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/Saved" element={<Saved />} />
            <Route path="/AddJobRoles" element={<AddJobRoles />} />
            <Route path="/MasterAddSkills" element={<MasterAddSkills />} />

            {/* <Route path="/JobPostScreenSub/:jobID" element={<JobPostScreenSub />} /> */}
            {/* ---------------- Learning ------------------------*/}
            <Route path="/LearningDefault" element={<LearningDefault />} />
            {/* ---------------- DSA ------------------------*/}

            <Route path="/Array" element={<ArrayPage />} />
            <Route path="/LinearSearch" element={<LinearSearch />} />
            <Route path="/BinarySearch" element={<BinarySearch />} />
            <Route path="/SelectionSort" element={<SelectionSort />} />
            <Route path="/BubbleSort" element={<BubbleSort />} />
            <Route path="/InsertionSort" element={<InsertionSort />} />
            <Route path="/MergeSort" element={<MergeSort />} />
            <Route path="/QuickSort" element={<QuickSort />} />
            <Route path="/HeapSort" element={<HeapSort />} />
            <Route path="/RadixSort" element={<RadixSort />} />
            <Route path="/CountingSort" element={<CountingSort />} />
            <Route path="/JAVA_Preparation" element={<JAVA_Preparation />} />
            <Route path="/JavaMiscellaneous" element={<JavaMiscellaneous />} />
            <Route path="/DBMS_Preparation" element={<DBMS_Preparation />} />

            

            
            

            <Route path="/Wordtopdf" element={<Wordtopdf />} />
          </Routes>
        </Router>
      </div>
    </StateContext>
  );
}
export default App;
