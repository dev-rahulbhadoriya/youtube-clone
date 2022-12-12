export interface InitialState {
    videos : HomePageVideos[];
    currentPlaying : CurrentPlaying | null;
    serachTerm : string;
    serachResults : [];
    nextPageToken: string | null;
    recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos {}
export interface CurrentPlaying {}
export interface RecommendedVideos {}