using LibGit2Sharp;
using System;
using System.Collections.Generic;
using System.IO;

namespace GitHandeler.GitCommunication
{
    /// <summary>
    /// Represents an object that manages a GitHub repository.
    /// </summary>
    public class RepositoryManager
    {
        /// <summary>
        /// The local path to the repositoy.
        /// </summary>
        public string LocalPath { get; private set; }

        /// <summary>
        /// The URL to the online repository.
        /// </summary>
        public string GitRepoLocation { get; private set; }

        /// <summary>
        /// The path to the created repository.
        /// </summary>
        public string GitLocalPath { get; set; }

        /// <summary>
        /// The commithash of the repository.
        /// </summary>
        public string CommitHash { get; set; }

        /// <summary>
        /// Creates an instance of the <see cref="RepositoryManager"/> object.
        /// </summary>
        /// <param name="localPath">The local path to the repositoy.</param>
        /// <param name="gitRepoLocation">The URL to the online repository.</param>
        /// <param name="commitHash">The commithash of the repository.</param>
        public RepositoryManager(string localPath, string gitRepoLocation, string commitHash)
        {
            LocalPath = localPath;
            GitRepoLocation = gitRepoLocation;
            CommitHash = commitHash;
        }

        /// <summary>
        /// This method Downloads a repository from the given repository url.
        /// </summary>
        /// <exception cref="Exception"></exception>
        public void DownloadRepo()
        {
            try
            {
                GitLocalPath = Repository.Clone(GitRepoLocation, LocalPath);
            }
            catch (Exception ex)
            {
                throw new Exception("Repository could not be cloned: " + ex.Message);
            }
        }


        /// <summary>
        /// This method Downloads a repository from the given repository url.
        /// </summary>
        /// <exception cref="Exception"></exception>
        public void DownloadExactCommit()
        {
            try
            {
                GitLocalPath = Repository.Clone(GitRepoLocation, LocalPath);
            }
            catch (Exception ex)
            {
                throw new Exception("Repository could not be cloned: " + ex.Message);
            }


            if (CommitHash != null || CommitHash != string.Empty)
            {
                ResetToCommit();
            }

        }

        public void ResetToCommit()
        {
            var repo = new Repository(LocalPath + "/.git");
            var commit = repo.Lookup<Commit>(CommitHash);
            // Reset the repository to the commit
            repo.Reset(ResetMode.Hard, commit);
        }

        public void GetNewestCommitHash()
        {
            //if (_localPath == null)
            //    throw new Exception("Repo is not yet cloned");

            string hash = string.Empty;
            using (var repo = new Repository(LocalPath))
            {
                // Get the commit that corresponds to the HEAD of the default branch
                var commit = repo.Head.Tip;

                // Get the hash of the blob (file)
                CommitHash = commit.Sha;
            }
        }

        //private string GetRepoName(Repository repo)
        //{
        //    // Get the path to the .git folder
        //    string gitPath = repo.Info.Path;

        //    // Extract the repository name from the .git folder path
        //    return new DirectoryInfo(gitPath).Parent.Name;
        //}
    }
}
