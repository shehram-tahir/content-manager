import { Suspense, lazy } from 'react';
import Skeleton from './Skeleton';

const NotesList = lazy(() => import ('./NoteList'));

const MainNoteList = () => <Suspense fallback={<Skeleton/>}>
    <NotesList />
 </Suspense>

 export default MainNoteList;