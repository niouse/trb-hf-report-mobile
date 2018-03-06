
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default function SvgCameraIr_Template($CoolSelect, $TooTipClocks) {
    return (wrappedComponent) => {
        const $SvgCameraIr_Template = (props) => {
            let styles = props.styles
            let text = props.text
            return (
					<g id="g4229"  fill={props.color || "black"}>
						  <path id="path4181"  fill={props.color || "black"} d="M 191.31723,174.55818 C 191.29062,174.3027 191.24804,174.04138 191.20014,173.7859 191.14691,173.53043 191.08305,173.27442 191.00853,173.02427 190.92923,172.77944 190.84354,172.52876 190.74241,172.28925 190.64182,172.04975 190.53005,171.80971 190.40657,171.58085 190.28469,171.35199 190.15163,171.12791 190.00686,170.9097 189.86316,170.69148 189.70828,170.47805 189.54329,170.28113 189.37829,170.07888 189.19733,169.88142 189.01637,169.69513 188.82956,169.50885 188.6321,169.33268 188.42985,169.16769 188.2276,169.0027 188.01417,168.84781 187.80128,168.70411 187.58306,168.56041 187.35899,168.42149 187.12427,168.29908 186.89541,168.17666 186.66069,168.0649 186.42172,167.96856 186.18221,167.86744 185.93153,167.77696 185.6867,167.70244 185.43602,167.62793 185.18055,167.56406 184.92454,167.51084 184.6696,167.46294 184.40774,167.42036 184.15226,167.39375 183.63067,167.34052 183.0979,167.34052 182.5811,167.39375 182.32031,167.42036 182.05898,167.46294 181.80351,167.51084 181.54803,167.56406 181.29203,167.62793 181.04667,167.70244 180.79652,167.77696 180.55115,167.86744 180.30633,167.96856 180.06682,168.06436 179.8321,168.17613 179.60324,168.29908 179.37438,168.42149 179.14552,168.55987 178.93209,168.70411 178.71388,168.84781 178.50045,169.0027 178.29873,169.16769 178.09648,169.33268 177.89902,169.50885 177.71753,169.69513 177.53125,169.88142 177.35508,170.07888 177.18476,170.28113 177.02509,170.47805 176.86489,170.69148 176.72172,170.9097 176.57748,171.12791 176.44442,171.35199 176.32201,171.58085 176.19959,171.80971 176.08782,172.04975 175.98563,172.28925 175.88504,172.52876 175.79935,172.77944 175.71951,173.02427 175.645,173.27442 175.58113,173.53043 175.52844,173.7859 175.48054,174.04138 175.43796,174.3027 175.41135,174.55818 175.38421,174.81897 175.37409,175.08562 175.37409,175.34642 175.37409,175.60721 175.38474,175.86854 175.41135,176.12934 175.43796,176.39013 175.48054,176.65146 175.52844,176.90694 175.58167,177.16241 175.64553,177.41841 175.71951,177.66324 175.79935,177.91339 175.88504,178.15876 175.98563,178.40358 176.08676,178.64309 176.19853,178.87781 176.32201,179.10667 176.44389,179.33553 176.57695,179.56492 176.72172,179.77782 176.86542,179.99603 177.02509,180.20946 177.18476,180.41171 177.35508,180.61396 177.53125,180.81142 177.71753,180.99238 177.89902,181.17866 178.09648,181.35483 178.29873,181.52515 178.50098,181.68482 178.71388,181.84502 178.93209,181.98873 179.14499,182.13243 179.37438,182.26602 179.60324,182.38844 179.83264,182.51085 180.06682,182.62262 180.30633,182.72428 180.55115,182.82008 180.79652,182.91056 181.04667,182.98507 181.29203,183.06491 181.5475,183.12878 181.80351,183.17668 182.05845,183.2299 182.32031,183.26716 182.5811,183.29377 182.8419,183.32038 183.1027,183.33635 183.36402,183.33635 183.62535,183.33635 183.89147,183.32038 184.15173,183.29377 184.40721,183.26716 184.66907,183.2299 184.92401,183.17668 185.17948,183.12878 185.43549,183.06491 185.68617,182.98507 185.931,182.91056 186.18168,182.82008 186.42119,182.72428 186.66016,182.62315 186.89541,182.51138 187.12374,182.38844 187.35792,182.26602 187.582,182.13296 187.80074,181.98873 188.01311,181.84502 188.22707,181.68535 188.42932,181.52515 188.63156,181.35483 188.82902,181.17866 189.01584,180.99238 189.1968,180.81142 189.37829,180.61396 189.54275,180.41171 189.70828,180.20946 189.86316,179.99603 190.00633,179.77782 190.15057,179.56492 190.28363,179.33553 190.40604,179.10667 190.52845,178.87781 190.64022,178.64309 190.74188,178.40358 190.84301,178.15876 190.9287,177.91339 191.008,177.66324 191.08305,177.41841 191.14691,177.16241 191.1996,176.90694 191.24751,176.65146 191.29008,176.39013 191.3167,176.12934 191.34331,175.86854 191.35395,175.60721 191.35395,175.34642 191.35449,175.08562 191.34331,174.81951 191.31723,174.55818 z M 373.14456,166.28936 H 355.17094 L 357.22111,159.38465 C 358.22757,155.99804 357.56653,152.28462 355.45409,149.45313 353.34058,146.62163 349.96993,144.93072 346.43694,144.93072 H 162.61373 C 156.40998,144.93072 151.36332,149.97791 151.36332,156.18112 V 239.38136 C 151.36332,245.5851 156.41052,250.63176 162.61373,250.63176 H 205.68282 L 189.20212,297.19285 C 188.23132,297.80918 187.29725,298.47608 186.40256,299.19193 H 129.11531 C 120.64158,299.19193 113.74859,306.08546 113.74859,314.55866 V 333.38013 C 113.74859,341.85333 120.64158,348.74685 129.11531,348.74685 H 187.10511 C 192.35935,352.71307 198.89361,355.06928 205.96916,355.06928 223.27056,355.06928 237.34555,340.99377 237.34555,323.69289 237.34555,320.31798 236.80373,317.06868 235.81271,314.02057 L 258.24913,250.63176 H 321.73373 C 326.67714,250.63176 331.11227,247.32179 332.51843,242.58329 L 336.16159,230.31152 C 336.45538,230.33068 336.75024,230.34292 337.04776,230.34292 H 373.14296 C 380.37126,230.34292 386.25141,224.46224 386.25141,217.23394 V 179.39833 C 386.25353,172.1695 380.37339,166.28936 373.14456,166.28936 z M 129.73111,332.76539 V 315.17445 H 175.77806 C 175.01217,317.88567 174.5933,320.74058 174.5933,323.69343 174.5933,326.84746 175.06593,329.89185 175.9356,332.76539 H 129.73111 z M 205.96916,339.0873 C 197.48052,339.0873 190.57529,332.18153 190.57529,323.69343 190.57529,315.20532 197.48106,308.29956 205.96916,308.29956 214.45726,308.29956 221.36303,315.20532 221.36303,323.69343 221.36409,332.18206 214.45833,339.0873 205.96916,339.0873 z M 224.41274,298.33184 C 219.70937,294.90211 214.02243,292.74708 207.85966,292.37878 L 222.63614,250.63176 H 241.29581 L 224.41274,298.33184 z M 318.20341,234.64924 H 263.9068 211.33942 167.34531 V 160.91217 H 340.09535 L 318.20341,234.64924 z M 370.27101,214.3604 H 340.89903 L 350.42659,182.27134 H 370.27101 V 214.3604 z M 367.27779,349.18429 V 268.42225 C 367.27779,260.79874 361.43701,254.95796 353.81351,254.95796 346.19,254.95796 340.34922,261.24442 340.34922,268.42225 V 349.16106 C 334.95412,353.19589 331.38866,359.9278 331.38866,367.10563 331.38866,379.6551 341.26404,389.53047 353.81351,389.53047 366.36297,389.53047 376.23811,379.6551 376.23811,367.10563 376.23811,359.9278 372.64943,353.21912 367.27779,349.18429 z M 353.81351,385.07342 C 343.93813,385.07342 335.86894,377.0047 335.86894,367.12885 335.86894,360.39694 339.45785,354.57938 344.82949,351.43662 V 268.42225 C 344.82949,263.49629 348.86409,259.46169 353.79005,259.46169 358.71601,259.46169 362.75037,263.49629 362.75037,268.42225 V 351.4127 C 368.14547,354.55593 371.71116,360.37348 371.71116,367.10539 371.75807,376.98077 363.68865,385.07342 353.81351,385.07342 z M 358.29355,354.55616 C 358.29355,354.11048 358.29355,354.11048 358.29355,353.66503 V 308.79166 C 358.29355,306.09411 356.51082,304.31138 353.81351,304.31138 351.11596,304.31138 349.33323,306.56325 349.33323,308.79166 V 353.64111 C 349.33323,354.08679 349.33323,354.08679 349.33323,354.5327 343.93813,356.33865 340.37267,361.26461 340.37267,367.08217 340.37267,374.70568 346.21345,380.54646 353.83696,380.54646 361.46024,380.54646 367.30102,374.70568 367.30102,367.08217 367.27779,361.28854 363.68865,356.36258 358.29355,354.55616 z"/>
					   </g>
            );
        }
        $SvgCameraIr_Template.propTypes = {
        };
        return $SvgCameraIr_Template
    }
}
    