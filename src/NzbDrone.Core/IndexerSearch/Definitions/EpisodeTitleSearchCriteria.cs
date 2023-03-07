namespace NzbDrone.Core.IndexerSearch.Definitions
{
    public class EpisodeTitleSearchCriteria : SearchCriteriaBase
    {
        public int AbsoluteEpisodeNumber { get; set; }
        public int SeasonNumber { get; set; }
        public int EpisodeNumber { get; set; }
        public string EpisodeTitle { get; set; }
        public bool IsSeasonSearch { get; set; }

        public override string ToString()
        {
            return $"[{Series.Title} : {SeasonNumber:0000} {EpisodeTitle}]";
        }
    }
}
