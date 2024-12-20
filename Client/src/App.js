import React, { Suspense, lazy } from "react";
import "./App.css";
import "./Style/Style.css";
import "./Style/Mobile_mediaQuery.css"
import "./Style/Tab_MediaQuery.css"
import NavBar from "./LandingPage/NavBar";
import Home from "./LandingPage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StateContext } from "./context";
import Loader from "./Components/Loader";

const SignUp = lazy(() => import("./Auth/SignUp"));
const SignIn = lazy(() => import("./Auth/SignIn"));
const JobPostDetail = lazy(() => import("./JobPost/JobpostDetail"));
const JobPostScreen = lazy(() => import("./JobPost/JobPostScreen"));
const Homelogin = lazy(() => import("./LandingPage/Homelogin"));
const JobPostScreenSub = lazy(() => import("./JobPost/JobPostScreenSub"));
const DSAHome = lazy(() => import("./Learning/DSA/DSAHome"));
const ArrayPage = lazy(() => import("./Learning/DSA/ArrayPage"));
const LinearSearch = lazy(() => import("./Learning/DSA/LinearSearch"));
const BinarySearch = lazy(() => import("./Learning/DSA/BinarySearch"));
const LearningDefault = lazy(() => import("./Learning/LearningDefault"));
const SelectionSort = lazy(() => import("./Learning/DSA/SelectionSort"));
const BubbleSort = lazy(() => import("./Learning/DSA/BubbleSort"));
const InsertionSort = lazy(() => import("./Learning/DSA/InsertionSort"));
const MergeSort = lazy(() => import("./Learning/DSA/MergeSort"));
const QuickSort = lazy(() => import("./Learning/DSA/QuickSort"));
const HeapSort = lazy(() => import("./Learning/DSA/HeapSort"));
const RadixSort = lazy(() => import("./Learning/DSA/RadixSort"));
const CountingSort = lazy(() => import("./Learning/DSA/CountingSort"));
const NotAuthorize = lazy(() => import("./Components/NotAuthorize"));
const ViewJobs = lazy(() => import("./JobPost/ViewJobs"));
const Profile = lazy(() => import("./Components/Profile"));
const Setting = lazy(() => import("./Components/setting"));
 const Saved = lazy(() => import("./Components/Saved"));
const Wordtopdf = lazy(() => import("./Converter/Wordtopdf"));
const AddJobRoles = lazy(() => import("./JobPost/Masters/AddJobRoles"));
const MasterAddSkills = lazy(() => import("./JobPost/Masters/MasterAddSkills"));
const JAVA_Preparation = lazy(() => import("./Learning/InterviewQA/JAVA_Preparation"));
const JavaMiscellaneous = lazy(() => import("./Learning/InterviewQA/JavaMiscellaneous"));
const DBMS_Preparation = lazy(() => import("./Learning/InterviewQA/DBMS_Preparation"));
const Basic_interview_codings = lazy(() => import("./Learning/InterviewQA/Basic_interview_codings"));
const OpenLink = lazy(() => import("./Components/openLink"));

function App() {
  return (
    <StateContext>
      <div className="app">
        <Router>
          {/* Suspense with fallback loader */}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Signup" element={<SignUp />} />
              <Route path="/JobPostScreen" element={<JobPostScreen />} />
              <Route path="/ViewJobs" element={<ViewJobs />} />
              <Route path="/ViewJobs/:jobid" element={<ViewJobs />} />
              <Route path="/JobpostDetail" element={<JobPostDetail />} />
              <Route path="/JobpostDetail/:jobid" element={<JobPostDetail />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/DSAHome" element={<DSAHome />} />
              <Route path="/Homelogin" element={<Homelogin />} />
              <Route path="/NotAuthorize" element={<NotAuthorize />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/Saved" element={<Saved />} />
              <Route path="/AddJobRoles" element={<AddJobRoles />} />
              <Route path="/MasterAddSkills" element={<MasterAddSkills />} />
              <Route path="/LearningDefault" element={<LearningDefault />} />
              <Route path="/OpenLink" element={<OpenLink />} />
              
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
              <Route path="/Basic_interview_codings" element={<Basic_interview_codings />} />
              <Route path="/Wordtopdf" element={<Wordtopdf />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </StateContext>
  );
}

export default App;
