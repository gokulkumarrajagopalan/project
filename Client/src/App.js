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
import {StateContext} from "./context";
import NotAuthorize from "./Components/NotAuthorize" ;
import ViewJobs from "./JobPost/ViewJobs";


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
            <Route path="/NotAuthorize" element ={ <NotAuthorize/>} />
            
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
          </Routes>
        </Router>
      </div>
      </StateContext>

  );
}

export default App;
