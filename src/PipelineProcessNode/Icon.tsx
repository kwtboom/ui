import React, { FC } from 'react';
import { NodeStatus } from './types';

interface IconProps {
  type: `${NodeStatus}`;
}

enum STATUS_ICON {
  PENDING = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAqUExURQAAAEdwTAAAAAAAAAAAAO7u7r+/v/n5+dTU1ExMTJaWlvHx8ejo6P///yhPmf8AAAANdFJOUzMAESgdxX7llkJf0LpTKdiyAAAA/klEQVQ4y42UzQ2CQBCFHywHvbFoAZBYAIQG0D5MvBsbIDHx5JkurMISPHKS7UVAWGZhxvgu7OTLDPvzZqBH7XIgP9gQwzdK0UslLtjCak9BBKKEgJQCNYEYjvwRRJgpGUA8B/4XLBL6lBaES+D1IF0C1QGmUlcLpNKjJLWgCxu9GrsMWjDlH+tprRHxIMGGBxlCHniIeeCj4EGAlAdKBuAB/gNvCZgTicjPr6ap2F2djSknQA6IizE3e0BqkfXT1NV4JY4VVjbFo9feve64sQyuF9Z3+1CaP5NjBqLAsY9jxR+GEy0qm1psA7Fx5FYTm1NuZ3kAiCNDHjLLsfQBfQM4mBCEg5MAAAAASUVORK5CYII=',
  RUNNING = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUdwTEid/0ie/2G2/0uh/06j/0ed/0ee/0mf/0ie/0id/0ie/0if/0ee/0ie/0qf/0ed/////6TO/5nI/1Wk/3W2/+n0/8jh/4e///X6/+Hv/9To/2eu/7na/3+Mp/gAAAAQdFJOUwCrggUjD/PaQsq6aVjsky779TRKAAAByElEQVRIx5VWWaKDIAxUxAXFBVBBbe9/zUfbV0gU1OYLNMskDAlJspecdykri6KsU1JlyYXkTV0MQIqU52fqBGl/pG1iYbKmHYJS8qA+LYeo1AFcVTucSEn3+s1wLkX1m74VZFFd6w8tQEUx/knqddHHPFzmGaqPmsVL1mOMNJSAseqLVuZxkkYOAEmrrkakBXbsY0D8l6cQT6w+GPH0m/eR5wX0r/YwJvitxBlMAf23lwllUbvdDKNDnL5iBCJSYhlDBuPiA1tMHARQ4TNWYnZrmnTf5SMSwIYQwh1Lk6Q+OR2j0SakT4J9lzqG6IXJ+eoSx6NVmJiBEZvnkyvSAsp9OLzZs6PwRbpn8DOk+kbSEiYNyrrdKivxByduHBwH93/2fvaIVkCN7A75DLxzLglbpyA5NKY3oKu9QPLiAvW4B6iABbq2bN9lbBPQKI9RIx/VoY/ZGIt0JqNc0DWv/xsZh7RZbdfbpJkmI7dXA4QE67+tr0bEWYWTFdGr87MND5+H1Ns8b1rhflmDWUeL63Zf5r8NiJb+MuJCQ+5siIbHaJ7G9bvwbK9YxH0ffTvwAC5Wnb5OKoJsGOmTS6ENsQ8glnaE0+PfP1GVczDMPStvAAAAAElFTkSuQmCC',
  SUCCESS = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURUdwTFPFGlPFGlPGG1PGG1PFGlXIHVPFGlPFGlLFGlPFG1THHF7OJ1vNIlPGG1XFHlLEGv///3jRTPb887rnpLPlm2LJL5vde9fxyojqlS0AAAAPdFJOUwC+rl9JgiTT9OeZNgoSa0bbXHIAAAFQSURBVEjHlZbbloMwCEXNTSRaxVbt/P+XTnQ6NdFcyHmz3WcJBAlNc9WgjRWACMKavinpoWRHntDqIYMPJqA/njHJj0hRgY7iLVBSMhJXj5QRtFdeTZQVXsJSVNIUlLifigZCL6oWiSE4MwdiSX7rT0x9Eh+Qa4A/gyG21NFvHd8AjCOYtvd2Pu2HIfOG52tezifjUu5K/PwOYtJFfvF/aBtbxbs6ySreJSGqeLJhH00l3vWTX6T1tRZ4Vybf8DPPa54nEYS0Q2uWdyEJijlSvEtaUsSR5F1Zzb2Ua5p3B6cjxZ+TvGuNW/MdjiXzQch8Q19TiH1A2zPZLX3VDPifAiPfoCvHjGBPYi+DQ4LH2/MqhJqAjvHNGGb48C8IXeS7y6WlO/51Ur5EXfyPyBIgOfUJw0q8RKRXDoXsPeD7Fht4gLHQNP247z8grVHt/d9f8dRvvl5szcsAAAAASUVORK5CYII=',
  FAILURE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURUdwTPYlLvYmL/YjLfUiLfYiLfcjLfYiLfcjLv8wMPUkLvYjLfYjLvUiLf////7y8vdQWfUoM/qZnvzDxvuwtPY4QvheZvhtdP3b3Un3SMQAAAANdFJOUwA3G8Dn04T1YQxNr6dguVjAAAABWElEQVRIx52W2ZKEIAxF3QARA9qD2v//pdOto5AQFyZvWveUWS7BoqChO9nXQilR97LTxU3o1iiIQpn2itESqf8YeYq0DbDRtKy8EnAaokr1ZQMX0ZRJOgouQ5G0WrgNRJTqHlBRVlUDD6IJlQt4FCKjAFSGPhJa3HsgmtE7H5LaZi6PF85ah4nxx1o7H49y/UDo0NsSYtXb8EZpXMHgMLHpX6QKA2dEqgeDMiIEo//m1OGuBILTA3RRjzDB6z996oElZl4PfVEDS1heDzXno514sX7ijD2ves+anAO2eqlLdkCc6XlCpEVveu94ok7auvd/4ImeDi7MiycksUY8X5bosPmwHxjieyAMnPo/JQw+QJ7OdyMmfICinFzih5VY8BGN+uRT/3yI6AuSrJlxTic1LRNdM9mLLH9V5i/j7HWff6HkX1n5l2L+tZt/sf/j1yH/5+TJ788vGHBdzhSgkiAAAAAASUVORK5CYII=',
  WARN = 'data:image/png;base64,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',
}

const Icon: FC<IconProps> = ({ type }) => {
  switch (type) {
    case NodeStatus.SUCCESS:
      return <img className="node-status-icon" src={STATUS_ICON.SUCCESS}></img>;
    case NodeStatus.WARN:
      return <img className="node-status-icon" src={STATUS_ICON.WARN}></img>;

    case NodeStatus.FAILURE:
      return <img className="node-status-icon" src={STATUS_ICON.FAILURE}></img>;

    case NodeStatus.PENDING:
      return <img className="node-status-icon" src={STATUS_ICON.PENDING}></img>;

    case NodeStatus.RUNNING:
      return (
        <img className="node-status-icon node-status-icon-running" src={STATUS_ICON.RUNNING}></img>
      );

    default:
      break;
  }
};

export default Icon;
